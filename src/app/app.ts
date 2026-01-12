import { Component, inject } from '@angular/core';
import { AuthRoutingModule } from "./auth/auth-routing-module";

import { CommonModule } from '@angular/common';
import { LanguageService } from './core/Services/language.service/language.service';
import { HeaderComponent } from './shared/components/header/header';
import { FundsComponent } from './shared/components/funds.component/funds.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [AuthRoutingModule, CommonModule, HeaderComponent, FundsComponent],
 template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  
}
