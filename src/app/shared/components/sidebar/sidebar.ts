import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  BreadcrumbService,
  BreadcrumbItem,
} from '../../services/breadcrumb.services.ts/breadcrumb.service';

interface SidebarMenuItem {
  label: string;
  icon?: string;
  route?: string;
  expanded?: boolean;
  children?: SidebarMenuItem[];
  breadcrumb?: BreadcrumbItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class SidebarComponent implements OnInit {

  isCollapsed = false;
  isMobile = false;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.updateViewMode();
  }

  /* 🔥 Detect screen resize */
  @HostListener('window:resize')
  updateViewMode(): void {
    this.isMobile = window.innerWidth <= 768;

    // Mobile → sidebar hidden by default
    if (this.isMobile) {
      this.isCollapsed = true;
    }
  }

  menu: SidebarMenuItem[] = [
    {
      label: 'الصفحة الرئيسية',
      icon: 'bi-house',
      route: '/dashboard',
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
            { label: 'طلب أموال إضافية', icon: 'bi-file-earmark-plus', route: '/dashboard/funds' },
            { label: 'طلب موافقة شراء كاميرات', icon: 'bi-camera', route: '/orders/cameras' },
            { label: 'توصيات البنود المركزية', icon: 'bi-link-45deg', route: '/orders/recommendations' },
            { label: 'مقترحات الإدارات للموازنة', icon: 'bi-file-text', route: '/orders/budget' },
          ]
        },
        {
          label: 'طلبات المستودع',
          icon: 'bi-cart',
          expanded: false,
          children: [
            { label: 'الاستهلاكية / التموينية', icon: 'bi-box-seam' },
            { label: 'طلب عهدة جديد', icon: 'bi-clipboard-check' },
            { label: 'إجراءات العهد', icon: 'bi-arrow-repeat' },
            { label: 'طلبات الملابس', icon: 'bi-bag' },
          ]
        },
        { label: 'طلب صيانة', icon: 'bi-tools' },
        { label: 'الاستعلامات', icon: 'bi-question-circle' },
      ]
    },
    { label: 'المستودعات', icon: 'bi-archive' },
    { label: 'المحاسبة', icon: 'bi-receipt' },
    { label: 'المشتريات', icon: 'bi-cart-check' },
  ];

  toggle(item: SidebarMenuItem): void {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }

navigate(item: SidebarMenuItem): void {
  if (!item.route) return;

  this.router.navigateByUrl(item.route);

  if (this.isMobile) {
    this.isCollapsed = true;
  }
}

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
