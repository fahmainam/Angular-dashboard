import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  forgotForm: FormGroup;
  isForgotMode = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  toggleForgot(): void {
    this.isForgotMode = !this.isForgotMode;
  }

  submitLogin(): void {
    if (this.loginForm.invalid) return;
    this.router.navigate(['/dashboard']);
  }

  submitForgot(): void {
    if (this.forgotForm.invalid) return;

    console.log('Reset link sent to:', this.forgotForm.value.email);
    this.isForgotMode = false;
  }
}
