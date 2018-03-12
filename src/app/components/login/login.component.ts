import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

    onLoginSubmit(credentials) {
      console.log(credentials);
  //   this.auth.login(credentials)
  //     .map(res => res.json())
  //     .subscribe(
  //       response => this.auth.finishAuthentication(response.token),
  //       error => this.errorMessage = error.json().message
  //     );
   }

   onSignupSubmit(credentials) {
  //   this.auth.signup(credentials)
  //     .map(res => res.json())
  //     .subscribe(
  //       response => this.auth.finishAuthentication(response.token),
  //       error => this.errorMessage = error.json().message
  //     );
   }

}
