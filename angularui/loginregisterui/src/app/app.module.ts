import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveAccountComponent } from './authcomponent/active-account/active-account.component';
import { LoginComponent } from './authcomponent/login/login.component';
import { RegisterComponent } from './authcomponent/register/register.component';
import {FormsModule} from "@angular/forms";
import {CodeInputModule} from "angular-code-input";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {httpTokenInterceptor} from "./service/http-token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ActiveAccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CodeInputModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
