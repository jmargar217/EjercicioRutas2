import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    // No funciona

    const headers = new Headers({
      "Content-Type": "application/json",
      "token": this.userService.getToken()
    });

    const url = `${this.baseUrl}/servers`;
    return this.http.post(url,{headers});
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
