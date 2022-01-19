import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(email:string,password:string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {
      'email': email,
      'password': password
    }
    return this.http.post(url, body);
  }

  getToken(){
    return JSON.parse(<string>localStorage.getItem("token"));
  }
}
