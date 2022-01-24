import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';



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
    this.userService.login(this.email,this.password)
    .subscribe( resp => {

      localStorage.setItem('token',JSON.stringify(resp));
      this.router.navigate(['servers']);
    }, err =>{
      console.log(err.message);
      Swal.fire({
        title: 'Error de inicio de sesión',
        text: 'El email o password introducidos son incorrectos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    });

}

}
