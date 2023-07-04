import { Component, OnInit } from '@angular/core';
import { signupService } from '../Services/signup.services';
import { Router } from '@angular/router';
import { doctorService } from '../Services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  
  
  DoctorRegister!:any;

 
  constructor(private doctordet:doctorService,private service:signupService,private router: Router) {

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

  deleteDoctor(req: any) {
    
  

    this.service.deleteDoctordetails(req.id, req).subscribe(
      () => {
        alert("Deleted successfully")
        confirm("Doctor "+req.id+" deleted Successfully!!!")
        {
          window.location.reload();
        }
      },
      error => {
        console.error(error);
         alert("An error occurred while deleting the Doctor Detail. Please try again.");
      }
    );
    this.doctordet.DeleteRequest(req.id,req).subscribe(data=>{
      alert("Doctor Details deleted")
      window.location.reload();
    })
  
     
 }

}
