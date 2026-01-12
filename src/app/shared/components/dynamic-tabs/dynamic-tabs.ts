import { Component } from '@angular/core';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';
import { StatCards } from "../stat-cards/stat-cards";
import { OrdersTableComponent } from "../data-table/data-table";
import { BudgetChartComponent } from "../chart/budget-chart";
import { ContractsComponent } from "../contract/contract";

interface Tab {
  id: number;
  label: string;
  active: boolean;
  content: string;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './dynamic-tabs.html',
  styleUrls: ['./dynamic-tabs.scss'],
  imports: [CommonModule, NgForOf, NgClass, NgIf, StatCards, OrdersTableComponent, BudgetChartComponent, ContractsComponent],
})
export class TabsComponent {


  statsCards = [
  {
    label: 'إجمالي المعاملات',
    amount: '10.5 مليون ',
    icon: 'bi-cash-stack', // Cash icon
    trendValue: '12%',
    trendDirection: 'up' as const,
    period: 'من الشهر الماضي'
  },
  {
    label: 'الفواتير المدفوعة',
    amount: '8,420',
    icon: 'bi-check-circle', // Success icon
    trendValue: '5%',
    trendDirection: 'up' as const,
    period: 'من الأسبوع الماضي'
  },
  {
    label: 'طلبات قيد الانتظار',
    amount: '142',
    icon: 'bi-clock-history', // Pending icon
    trendValue: '8%',
    trendDirection: 'down' as const,
    period: 'من يوم أمس'
  },
  {
    label: 'إجمالي المستخدمين',
    amount: '1,250',
    icon: 'bi-people', // Users icon
    trendValue: '18%',
    trendDirection: 'up' as const,
    period: 'منذ العام الماضي'
  },
  {
    label: 'إجمالي المستخدمين',
    amount: '2,250',
    icon: 'bi-people', // Users icon
    trendValue: '10%',
    trendDirection: 'down' as const,
    period: 'منذ العام الماضي'
  },
    {
    label: 'إجمالي المعاملات',
    amount: '10.5 مليون ',
    icon: 'bi-cash-stack', // Cash icon
    trendValue: '12%',
    trendDirection: 'up' as const,
    period: 'من الشهر الماضي'
  },
  {
    label: 'الفواتير المدفوعة',
    amount: '8,420',
    icon: 'bi-check-circle', // Success icon
    trendValue: '5%',
    trendDirection: 'up' as const,
    period: 'من الأسبوع الماضي'
  },
  {
    label: 'طلبات قيد الانتظار',
    amount: '142',
    icon: 'bi-clock-history', // Pending icon
    trendValue: '8%',
    trendDirection: 'down' as const,
    period: 'من يوم أمس'
  },
  {
    label: 'إجمالي المستخدمين',
    amount: '1,250',
    icon: 'bi-people', // Users icon
    trendValue: '18%',
    trendDirection: 'up' as const,
    period: 'منذ العام الماضي'
  },
  {
    label: 'إجمالي المستخدمين',
    amount: '2,250',
    icon: 'bi-people', // Users icon
    trendValue: '10%',
    trendDirection: 'down' as const,
    period: 'منذ العام الماضي'
  }


];


  tabs: Tab[] = [
    { id: 1, label: 'لوحة القيادة', active: true, content: 'محتوى لوحة القيادة' },
    { id: 2, label: 'المشتريات', active: false, content: 'محتوى المشتريات' },
    { id: 3, label: 'العهد', active: false, content: 'محتوى العهد' },
    { id: 4, label: 'الطلبات', active: false, content: 'محتوى الطلبات' },
    { id: 5, label: 'الفواتير', active: false, content: 'محتوى الفواتير' },
    { id: 6, label: 'العقود والمناقصات', active: false, content: 'محتوى العقود والمناقصات' },
    { id: 7, label: 'الموازنة', active: false, content: 'محتوى الموازنة' }
  ];

  private nextId = 8;

  setActive(tab: Tab) {
    this.tabs.forEach(t => (t.active = false));
    tab.active = true;
  }

  addTab() {
    this.tabs.forEach(t => (t.active = false));
    this.tabs.push({
      id: this.nextId++,
      label: 'تبويب جديد',
      content: 'محتوى تبويب جديد',
      active: true
    });
  }

  removeTab(tab: Tab, event: MouseEvent) {
    event.stopPropagation();

    if (!confirm(`هل أنت متأكد من حذف "${tab.label}"؟`)) return;

    const index = this.tabs.findIndex(t => t.id === tab.id);
    const wasActive = tab.active;

    this.tabs.splice(index, 1);

    if (wasActive && this.tabs.length) {
      this.tabs[Math.max(index - 1, 0)].active = true;
    }
  }

  trackById(_: number, tab: Tab) {
    return tab.id;
  }

  get activeTab(): Tab | undefined {
    return this.tabs.find(tab => tab.active);
  }
}
