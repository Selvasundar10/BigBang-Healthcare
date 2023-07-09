import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, VERSION } from "@angular/core";
import { Router  } from '@angular/router';
import { signupService } from '../Services/signup.services';
import { LoggedInUserModel } from '../Models/LoggedInUser.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registrationForm!: FormGroup;
  showError: boolean = false;
  registration_status = false;

  public signup_form!:FormGroup;

   register!:any;
   DoctorRegister!:any;
  loggedInUser:LoggedInUserModel | undefined;

  constructor(private formBuilder: FormBuilder,private service:signupService,private router:Router) {

    this.register={
      id:"",
      email:"",
      role:"",
      password:"",
      requestStatus:"request"

    }
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      id: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  get formControls() {
    return this.registrationForm.controls;
  }

 
  onPost(){

console.log(this.register);
    if(this.register.role=="Doctor"){

      this.service.Doctorsignup(this.register).subscribe(data=>{
        console.log("register request send to admin")
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
      })
    }
    else{
    this.service.signup(this.register).subscribe(data=>{
      console.log("register in component")
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("UserID",this.loggedInUser.id);
      localStorage.setItem("role",this.loggedInUser.role);
      this.registration_status = true;
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 3000);
    
    },
    err=>{
      console.log(err)
    });
    
  } 

   

  



}
login_here()
{
  this.router.navigateByUrl('login');
}

}

export { LoggedInUserModel };

