import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent} from "../breadcrumb/breadcrumb";
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../core/Services/theme.services/theme.services';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {

constructor(public themeService: ThemeService) {}

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
