import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { appointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-doctors-profile',
  templateUrl: './doctors-profile.component.html',
  styleUrls: ['./doctors-profile.component.css']
})
@Injectable()

export class DoctorsProfileComponent {

  [x: string]: any;
  @ViewChild('myModal') modal: any;
  appointId?:number;
    request: any;
    patientdata?:any;
  
    
    constructor(private service:appointmentService) {
     this.patientdata=localStorage.getItem("UserID");
      this.getAppointments(this.patientdata);
    }
  
    private  getAppointments(patientdata:any): void {
      this.service.getUserAppointmentsdetails(this.patientdata).subscribe((result: any) => {
        this.request = result;
        console.log(this.request);

      });
      
    }

}