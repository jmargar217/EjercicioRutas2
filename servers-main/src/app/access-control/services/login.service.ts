import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatosToken } from '../token.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(email:string,password:string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {
      'email': email,
      'password': password
    }
    return this.http.post<DatosToken>(url, body);
  }

  logout(){
    localStorage.removeItem("token");
  }

  getToken(){
    return JSON.parse(<string>localStorage.getItem("token"));
  }
}
