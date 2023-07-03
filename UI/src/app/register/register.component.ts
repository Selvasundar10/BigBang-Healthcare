import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, VERSION } from "@angular/core";
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registrationForm!: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
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
    return this.registrationForm.controls;
  }

  onSubmit(): void {
    // console.log(this.loginForm.value);
    this.submitted = true;
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      localStorage.setItem("user-Data", JSON.stringify(this.registrationForm.value));
    }
  }
}