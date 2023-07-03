import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, VERSION } from "@angular/core";
import { Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm! : FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Username: ['', Validators.required],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin() {
    if (this.loginForm?.valid) {
      // Perform registration logic here
  
      // Navigate to the next page
      this.router.navigate(['/home']);
    } else {
      // Throw an error or show an error message
      throw new Error('Form is invalid');
    }
  }}