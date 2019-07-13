import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  mensagemErro = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      this.loginService.logar(this.login)
        .subscribe(() => {
          this.router.navigate(['/inbox']);
        },
          (responseError: HttpErrorResponse) => {
            this.mensagemErro = responseError.error.body.errors.body;
          });
    }
  }
}
