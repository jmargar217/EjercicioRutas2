import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from '../access-control/services/user.service';
import { Server } from './interfaces/server.interface';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient,
    private userService:UserService) { }

  getServers(){
    let token = JSON.parse(<string>localStorage.getItem('token')).access_token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    const options = {
      headers: headers
    }

    const url = `${this.baseUrl}/servers`;
    return this.http.get<Server[]>(url,options);
  }

  /*
  getServer(id: number): Server {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return <Server>server;
  }
  */

  /*
  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
  */
}
