import { Component, OnInit, ViewChild } from '@angular/core';
import { doctorService } from '../Services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {
  [x: string]: any;
  @ViewChild('myModal') modal: any; 
  // Add this line
  
  DoctorRegister!:any;

  openModal() {
    this.modal.nativeElement.style.display = 'block'; // Show the modal
  }
  constructor(private doctordet:doctorService,router: Router) {

    this.DoctorRegister={
      id:"",
      email:"",
      role: "",
      specialization:" ",
      experiance:0,
      requeststatus:"",
      password:"",
   
    }
   }
  

  selectedDoctorId?: number;

  ngOnInit(): void
  {
    this.doctordet.getDoctors().subscribe(detils=>this.DoctorRegister=detils);  
  }
  

  bookAppointment(c:any){
    this.selectedDoctorId = c.id;
  
  
  }
}
