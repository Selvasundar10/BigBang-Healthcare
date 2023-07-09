import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent{

  onClickLogout(){
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    window.location.reload()
  }
}