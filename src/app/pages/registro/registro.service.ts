import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private registerUrl = environment.baseUrl + 'users/';

  constructor(public httpClient: HttpClient) { }

  checkUser(user) {
    const checkUserUrl = this.registerUrl + user;
    return this.httpClient.get(checkUserUrl);
  }

  registerUser(form) {
    return this.httpClient.post(this.registerUrl, form, {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        observe: 'response'
      });
  }
}
