import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';
import { LoginComponent } from './access-control/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  {path: 'login',component:LoginComponent},


  { path: 'users', component: UsersComponent,canActivate:[AuthGuard], children: [
    { path: ':id/:name', component: UserComponent },
  ]
  },

  { path: 'servers', component: ServersComponent,canActivate:[AuthGuard], children: [
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }, //resolve:{server: ServerResolverService} },
    { path: ':id', canActivate:[AuthGuard], component: ServerComponent }
  ]
  },


  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Ooopsi! Page not found.'}},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
