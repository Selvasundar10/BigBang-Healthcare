import { Component, Input } from '@angular/core';
import { doctorService } from '../Services/doctor.service';
import { Router } from '@angular/router';
import { appointmentService } from '../Services/appointment.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() data?: any;
  appointment!:any;
  DoctorRegister!:any;

  constructor(private service:appointmentService,private docService:doctorService,private router: Router) {
    
   this.appointment={
     appointmentId:0,
     patientId:"",
     doctorId:"",
     date:"",
     timeSlot:"",
     details:""
    
   }
    
 

 
 

    this.DoctorRegister={
      id:"",
      email:"",
      role: "",
      specialization:" ",
      experiance:0,
      requeststatus:"",
      availability:"",
      password:""
    }

    
   }
  

  
  ngOnInit(): void
  {

    this.docService.getDoctors().subscribe(detils=>this.DoctorRegister=detils);

   
  }
   
    
  
  
  Book(book:any){
    this.appointment.patientId=localStorage.getItem('UserID');
   this.appointment.doctorId=this.data;

   console.log(this.appointment);
    this.service.bookappointment(this.appointment).subscribe((trainer: any) => console.log(trainer));
    if(confirm("Appointment Booked successfully!!! "))
    {
      this.router.navigate(['/booking-details']);
    }
  }


 
   }
   export class AppointmentModel{
    appointmentId:number=0;
    patientId:string="";
    doctorId:string="";
    date:string=""
    timeSlot:string="";
    details:string="";
  
   }


