import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public registrationForm: FormGroup;
  public msg = {
    userRegistered: false
  };

  public errors = {
    user: false,
    userDuplicated: false,
    server: false
  };

  constructor(private registroService: RegistroService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rpassword: new FormControl('', Validators.required),
      birthday: new FormControl(),
    }, {validators:  this.checkPasswords});
  }

  checkPasswords(form) {
    const password = form.controls.password.value;
    const rpassword = form.controls.rpassword.value;

    return password === rpassword ? null : { notSame: true };
  }

  checkUser() {
    this.errors.userDuplicated = false;

    const user = this.registrationForm.controls.username;
    this.registroService.checkUser(user.value).subscribe(
      () => {
        this.errors.userDuplicated = true;
        // user.status = 'INVALID';
      },
      (err) => {
        if (err.status === 404) {
          // user.status = 'VALID';
        } else if (err.status === 500) {
          this.errors.server = true;
        }
      }
    );
  }

  registerUser() {
    this.registroService.registerUser(this.registrationForm.value).subscribe(
      () => {
        this.msg.userRegistered = true;
      },
      (error) => {
        if (error.status === 400) {
          this.errors.user = true;
        } else if (error.status === 409) {
          this.errors.userDuplicated = true;
        } else if (error.status === 500) {
          this.errors.server = true;
        }
      }
    );
  }

}
