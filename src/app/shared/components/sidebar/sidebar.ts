import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  BreadcrumbService,
  BreadcrumbItem,
} from '../../services/breadcrumb.services.ts/breadcrumb.service';

interface MenuItem {
  label: string;
  icon?: string;
  route?: string;
  breadcrumb?: BreadcrumbItem[];
  expanded?: boolean;
  children?: MenuItem[];
  badge?: number;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class SidebarComponent {
  isCollapsed = false;
  isMobile = false;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.updateScreenMode();
  }

  /* ✅ Detect screen size */
  @HostListener('window:resize')
  updateScreenMode(): void {
    this.isMobile = window.innerWidth <= 768;

    // 🔒 Never collapse on desktop
    if (!this.isMobile) {
      this.isCollapsed = false;
    }
  }

  menu: MenuItem[] = [
    {
      label: 'الصفحة الرئيسية',
      icon: 'bi-house',
      route: '/dashboard',
      breadcrumb: [{ label: 'الصفحة الرئيسية', link: '/dashboard' }],
    },
    {
      label: 'الطلبات',
      icon: 'bi-layers',
      expanded: true,
      children: [
        {
          label: 'طلبات الإدارات',
          icon: 'bi-building',
          expanded: true,
          children: [
            {
              label: 'طلب أموال إضافية',
              route: '/dashboard/funds',
              breadcrumb: [
                { label: 'طلبات الإدارات', link: '/dashboard/orders' },
                { label: 'طلب أموال إضافية' },
              ],
            },
            { label: 'طلب موافقة شراء كميات', route: '/orders/approval' },
            { label: 'توصيات البنود المركزية', route: '/orders/recommendations' },
            { label: 'مقترحات الإدارات للموازنة', route: '/orders/budget' },
          ],
        },
      ],
    },
  ];

  /* ✅ Navigate + collapse only on mobile */
  navigate(item: MenuItem): void {
  if (!item.route) return;

  this.breadcrumbService.set(item.breadcrumb ?? []);
  this.router.navigateByUrl(item.route);

  // 🔥 collapse only on mobile
  if (this.isMobile) {
    this.isCollapsed = true;
  }
}

  toggle(item: MenuItem): void {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }

  /* ✅ Toggle button works only on mobile */
  toggleSidebar(): void {
  this.isCollapsed = !this.isCollapsed;
}

  }


