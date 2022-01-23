import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../access-control/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private userService:UserService) { }

  ngOnInit(): void {
  }

  onlogin() {
    this.router.navigateByUrl('login');
  }

  onlogout() {
    this.userService.logout();
  }


  onLoadServer(id:number) {
    this.router.navigate(['/servers',id,'edit'],
    { queryParams: { allowEdit: '8' }, fragment: 'loading' });
  }



}
