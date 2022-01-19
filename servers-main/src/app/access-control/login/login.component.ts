import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    this.userService.login(this.email,this.password)
    .subscribe( resp => {
      console.log(resp);
      localStorage.setItem('token',JSON.stringify(resp));
      this.router.navigateByUrl('servers');
    })
}

}
