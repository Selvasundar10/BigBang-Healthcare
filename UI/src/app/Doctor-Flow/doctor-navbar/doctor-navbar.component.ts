import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css']
})
export class DoctorNavbarComponent {

  onClickLogout(){
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    window.location.reload()
  }
}
