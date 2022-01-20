import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../access-control/services/user.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];
  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
    /*
    if(this.userService.getToken() != null){
      this.servers = this.serversService.getServers();

    }else{
      console.log("Error, no estas logueado");
      this.router.navigateByUrl('');
    }
    */
  }

  onReload() {
    this.router.navigate(['servers']), { relativeTo: this.route };
  }

}
