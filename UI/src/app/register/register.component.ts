import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router){}


  onSubmit(){
    // return this.usr.createUser(this.user).subscribe(user=>this.user = user),alert("Registered successfully");
    if(confirm("Registered successfully")){
    this.router.navigate(['/login'])
    }
  }
}
