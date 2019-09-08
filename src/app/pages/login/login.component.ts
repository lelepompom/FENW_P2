import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public errors = {
    login: false,
    user: false,
    server: false
  };

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login(IDuser, IDpassword) {

    const user = IDuser.value;
    const pwd = IDpassword.value;

    this.errors = {
      login: false,
      user: false,
      server: false
    };

    this.loginService.getUser(user, pwd).subscribe(
      (resp) => {
        this.setSession(resp.headers.get('Authorization'));
        this.router.navigate(['/inicio']);
      },
      (error) => {
        if (error.status === 400) {
          this.errors.login = true;
        } else if (error.status === 401) {
          this.errors.user = true;
        } else if (error.status === 500) {
          this.errors.server = true;
        }
      }
    );
  }

  setSession(token) {
    sessionStorage.setItem('Authorization', token);
  }


}
