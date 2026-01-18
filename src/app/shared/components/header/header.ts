import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/Services/theme.services/theme.services';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../../core/Services/language.service/language.service';
import { TranslatePipe } from '../../pipes/translate-pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  constructor(
    public lang: LanguageService,
    public themeService: ThemeService
  ) {}

  toggleLanguage() {
    this.lang.setLanguage(this.lang.lang === 'ar' ? 'en' : 'ar');
  }



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
