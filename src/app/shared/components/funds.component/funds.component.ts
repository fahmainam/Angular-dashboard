import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination.component/pagination.component';

interface FundRequest {
  id: string;
  department: string;
  amount: number;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

@Component({
  selector: 'app-funds',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss'], // ❗ removed global styles
})
export class FundsComponent {

  /* ---------------- Pagination ---------------- */
  currentPage = 1;
  pageSize = 5;

  get paginatedFunds(): FundRequest[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(start, start + this.pageSize);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  /* ---------------- Summary Cards ---------------- */
  summary = [
    { label: 'إجمالي الطلبات', value: 128 },
    { label: 'قيد المراجعة', value: 42 },
    { label: 'تمت الموافقة', value: 68 },
    { label: 'مرفوضة', value: 18 },
  ];

  /* ---------------- Table Data ---------------- */
  items: FundRequest[] = [
    {
    id: 'REQ-2025-001',
    department: 'إدارة تقنية المعلومات',
    amount: 250000,
    date: '12 يناير 2025',
    status: 'pending',
  },
  {
    id: 'REQ-2025-002',
    department: 'إدارة الموارد البشرية',
    amount: 120000,
    date: '10 يناير 2025',
    status: 'approved',
  },
  {
    id: 'REQ-2025-003',
    department: 'إدارة العمليات',
    amount: 98000,
    date: '08 يناير 2025',
    status: 'rejected',
  },
  {
    id: 'REQ-2025-004',
    department: 'إدارة المالية',
    amount: 450000,
    date: '05 يناير 2025',
    status: 'approved',
  },
  {
    id: 'REQ-2025-005',
    department: 'إدارة التخطيط',
    amount: 175000,
    date: '01 يناير 2025',
    status: 'pending',
  },

  // ───────────── Page 2 ─────────────
  {
    id: 'REQ-2025-006',
    department: 'إدارة المشتريات',
    amount: 89000,
    date: '28 ديسمبر 2024',
    status: 'approved',
  },
  {
    id: 'REQ-2025-007',
    department: 'إدارة الخدمات العامة',
    amount: 67000,
    date: '26 ديسمبر 2024',
    status: 'pending',
  },
  {
    id: 'REQ-2025-008',
    department: 'إدارة تقنية المعلومات',
    amount: 310000,
    date: '24 ديسمبر 2024',
    status: 'approved',
  },
  {
    id: 'REQ-2025-009',
    department: 'إدارة المشاريع',
    amount: 540000,
    date: '22 ديسمبر 2024',
    status: 'rejected',
  },
  {
    id: 'REQ-2025-010',
    department: 'إدارة الشؤون القانونية',
    amount: 45000,
    date: '20 ديسمبر 2024',
    status: 'pending',
  },

  // ───────────── Page 3 ─────────────
  {
    id: 'REQ-2025-011',
    department: 'إدارة الأمن',
    amount: 130000,
    date: '18 ديسمبر 2024',
    status: 'approved',
  },
  {
    id: 'REQ-2025-012',
    department: 'إدارة العلاقات العامة',
    amount: 76000,
    date: '15 ديسمبر 2024',
    status: 'pending',
  },
  {
    id: 'REQ-2025-013',
    department: 'إدارة الجودة',
    amount: 99000,
    date: '13 ديسمبر 2024',
    status: 'approved',
  },
  {
    id: 'REQ-2025-014',
    department: 'إدارة التخطيط',
    amount: 210000,
    date: '10 ديسمبر 2024',
    status: 'rejected',
  },
  {
    id: 'REQ-2025-015',
    department: 'إدارة المخازن',
    amount: 56000,
    date: '08 ديسمبر 2024',
    status: 'pending',
  },

  // ───────────── Page 4 ─────────────
  {
    id: 'REQ-2025-016',
    department: 'إدارة تقنية المعلومات',
    amount: 420000,
    date: '05 ديسمبر 2024',
    status: 'approved',
  },
  {
    id: 'REQ-2025-017',
    department: 'إدارة الموارد البشرية',
    amount: 110000,
    date: '03 ديسمبر 2024',
    status: 'pending',
  },
  {
    id: 'REQ-2025-018',
    department: 'إدارة الصيانة',
    amount: 68000,
    date: '01 ديسمبر 2024',
    status: 'approved',
  },
  {
    id: 'REQ-2025-019',
    department: 'إدارة العمليات',
    amount: 195000,
    date: '28 نوفمبر 2024',
    status: 'rejected',
  },
  {
    id: 'REQ-2025-020',
    department: 'إدارة المالية',
    amount: 360000,
    date: '25 نوفمبر 2024',
    status: 'approved',
  },
    
  ];

  /* ---------------- Status Label ---------------- */
  getStatusLabel(status: FundRequest['status']): string {
    return {
      pending: 'قيد المراجعة',
      approved: 'مقبول',
      rejected: 'مرفوض',
    }[status];
  }
}
