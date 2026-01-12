import { Component, inject } from '@angular/core';
import { AuthRoutingModule } from "./auth/auth-routing-module";

import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [AuthRoutingModule, CommonModule],
 template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  
}
