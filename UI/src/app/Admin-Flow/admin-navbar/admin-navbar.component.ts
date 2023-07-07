import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  onClickLogout(){
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    window.location.reload()
  }
}
