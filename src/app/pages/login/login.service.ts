import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = environment.baseUrl + 'users/login';

  constructor(public httpClient: HttpClient) { }

  getUser(user, pwd) {
    const URL = this.loginUrl + '?username=' + user + '&password=' + pwd;
    return this.httpClient.get(URL, {observe: 'response'});
  }

}
