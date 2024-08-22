import { Component } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";
import {RegistationRequest} from "../../model/registration-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  registerRequest:RegistationRequest = {email:'',firstname:'',lastname:'',password:''};

  errorMsg:Array<string> =[];

  constructor(private router:Router,
              private authService:AuthenticationService) {
  }

  register() {

    this.errorMsg =[];
    this.authService.register({
      body:this.registerRequest
    }).subscribe({
      next:()=>{
        this.router.navigate(['activate-account']);
      },
      error: (err)=>{
        this.errorMsg = err.error.validationErrors;
      }
    })
  }

  async login() {
    await this.router.navigate(['login'])
  }
}

