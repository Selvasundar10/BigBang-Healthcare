import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router){}
  onCheck()
  {

    if(!localStorage.getItem("jwtToken"))
    {
      this.router.navigate(['/Login']);
    }
  }
  // onSubmit(): void {
  //   // Handle the form submission logic here
  //   console.log(this.user);
  //   // You can send the user data to an API or perform any other actions
  // }
  onSignIn(mailId: string, password: string) {
  //   this.authService.signIn(mailId, password)
  //     .subscribe(
  //       (response) => {
  //         if(confirm("Logged in successfully"))
  //         {
  //           this.router.navigate(['/uHome']);
  //         }
  //       },
  //       (error) => {
  //         alert("Please enter correct username or password!!!!");
  //       }
  //     );
  // }
  if(confirm("SignIn successfully")){
    this.router.navigate(['/uHome'])

  }
}
}