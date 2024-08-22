import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActiveAccountComponent} from "./authcomponent/active-account/active-account.component";
import {RegisterComponent} from "./authcomponent/register/register.component";
import {LoginComponent} from "./authcomponent/login/login.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'activate-account', component: ActiveAccountComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
