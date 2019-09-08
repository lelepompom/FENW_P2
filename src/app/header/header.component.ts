import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.checkSession();
  }

  checkSession() {
    return sessionStorage.getItem('Authorization');
  }

  clearSession() {
    sessionStorage.clear();
  }
}
