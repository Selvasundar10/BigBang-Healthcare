import { Component, ViewChild } from '@angular/core';
import { appointmentService } from '../Services/appointment.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {
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