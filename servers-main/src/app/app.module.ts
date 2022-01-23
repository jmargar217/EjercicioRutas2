import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { ServersService } from './servers/servers.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AccessControlModule } from './access-control/access-control.module';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ServersModule,
    AccessControlModule,
    HttpClientModule
  ],
  providers: [ServersService,AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
