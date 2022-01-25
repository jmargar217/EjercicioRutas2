import { HashLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  public users: User[] = [];

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(resp =>{
      this.users=resp;
    });
  }


}
