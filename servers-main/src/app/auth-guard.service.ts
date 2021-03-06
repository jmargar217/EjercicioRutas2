import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { LoginService} from './access-control/services/login.service';
import { DatosToken } from './access-control/token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private baseUrl: string = environment.baseUrl;
  private estado:boolean = false;
  constructor(private loginService:LoginService, private router: Router, private http:HttpClient) {}



  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.loginService.getToken() != null){
      let token:DatosToken = this.loginService.getToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access_token}`
      })
      const options = {
        headers: headers
      }
      const url = `${this.baseUrl}/tokenCheck`;
      this.http.get(url,options).subscribe(data =>{
        this.estado = true;
      }, err => {
        Swal.fire({
          title: 'Su token ha espirado',
          text: 'Vuelva a iniciar sesión',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        console.log(err.message);
        this.estado = false;
      });
      return this.estado;
    }else{
      this.router.navigate(['']);
      return this.estado;
    }

  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    return this.canActivate(route, state);
  }
}
