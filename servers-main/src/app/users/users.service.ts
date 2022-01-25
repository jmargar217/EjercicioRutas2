import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getUsers(){
    let token = JSON.parse(<string>localStorage.getItem('token')).access_token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    const options = {
      headers: headers
    }

    const url = `${this.baseUrl}/users`;
    return this.http.get<User[]>(url,options);
  }
}
