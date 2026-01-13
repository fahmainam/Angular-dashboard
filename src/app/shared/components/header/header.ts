import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ThemeService } from '../../../core/Services/theme.services/theme.services';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  constructor(
   
    public themeService: ThemeService
  ) {}



toggleTheme(): void {
  this.themeService.toggleTheme();
}
  user = {
    name: 'محمد عبد الله',
    role: 'قسم المالية',
  };

  notifications = [
    { text: 'تمت الموافقة على الطلب', time: 'قبل 5 دقائق' },
    { text: 'طلب جديد بانتظار المراجعة', time: 'قبل 10 دقائق' },
    { text: 'تم تحديث النظام', time: 'قبل ساعة' },
  ];

  logout() {
    console.log('Logout clicked');
  }
}
