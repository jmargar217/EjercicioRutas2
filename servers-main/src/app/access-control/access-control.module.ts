import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports:[
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    UserService
  ]
})
export class AccessControlModule { }
