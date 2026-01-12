import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from "../pagination.component/pagination.component";

@Component({
  selector: 'app-orders-table',
  standalone: true,
  templateUrl: './data-table.html',
  styleUrls: ['./data-table.scss'],
  imports: [NgClass, CommonModule, FormsModule, PaginationComponent]
})
export class OrdersTableComponent {
currentPage = 1;
pageSize = 4; // ✅ SHOW 4 ROWS PER PAGE

get paginatedOrders() {
  const start = (this.currentPage - 1) * this.pageSize;
  return this.filteredData.slice(start, start + this.pageSize);
}

onPageChange(page: number): void {
  this.currentPage = page;
  
}
applyFilter(): void {
  // your filtering logic
  this.currentPage = 1; // ✅ IMPORTANT
}
get totalPages(): number {
  return Math.ceil(this.filteredData.length / this.pageSize);
}

  selectedStatus: string = 'all';

  data = [
    {
    ref: 'BDRS/2016/019/0008',
    title: 'توريد أجهزة مواد',
    products: 5,
    notes: 5,
    status: 'مقبول',
    statusKey: 'accepted',
    statusClass: 'bg-success-subtle text-success',
    user: 'فارس أسامة طارق',
    email: 'farestarik@moi.gov.qa',
    date: '22 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0009',
    title: 'تجديد تراخيص',
    products: 5,
    notes: 2,
    status: 'قيد المعالجة',
    statusKey: 'processing',
    statusClass: 'bg-warning-subtle text-warning',
    user: 'حامد هادي نجم',
    email: 'hamedn@moi.gov.qa',
    date: '20 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0010',
    title: 'ترقية وتحديث تكنولوجيا',
    products: 5,
    notes: 8,
    status: 'مرفوض',
    statusKey: 'rejected',
    statusClass: 'bg-danger-subtle text-danger',
    user: 'جاسم محمد أحمد',
    email: 'jassem@moi.gov.qa',
    date: '24 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0011',
    title: 'شراء أنظمة أمنية',
    products: 3,
    notes: 4,
    status: 'مقبول',
    statusKey: 'accepted',
    statusClass: 'bg-success-subtle text-success',
    user: 'سالم راشد الكعبي',
    email: 'salemr@moi.gov.qa',
    date: '25 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0012',
    title: 'توريد أجهزة اتصال',
    products: 7,
    notes: 6,
    status: 'قيد المعالجة',
    statusKey: 'processing',
    statusClass: 'bg-warning-subtle text-warning',
    user: 'نواف علي الشمري',
    email: 'nawafsh@moi.gov.qa',
    date: '26 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0013',
    title: 'صيانة دورية للمعدات',
    products: 4,
    notes: 3,
    status: 'مقبول',
    statusKey: 'accepted',
    statusClass: 'bg-success-subtle text-success',
    user: 'عبدالله حسن يوسف',
    email: 'abdullahy@moi.gov.qa',
    date: '27 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0014',
    title: 'تحديث أنظمة الشبكات',
    products: 6,
    notes: 7,
    status: 'مرفوض',
    statusKey: 'rejected',
    statusClass: 'bg-danger-subtle text-danger',
    user: 'راشد ناصر المري',
    email: 'rashedm@moi.gov.qa',
    date: '28 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0015',
    title: 'توريد معدات مكتبية',
    products: 10,
    notes: 1,
    status: 'مقبول',
    statusKey: 'accepted',
    statusClass: 'bg-success-subtle text-success',
    user: 'محمد علي سالم',
    email: 'mohameds@moi.gov.qa',
    date: '29 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0016',
    title: 'تطوير بوابة إلكترونية',
    products: 2,
    notes: 9,
    status: 'قيد المعالجة',
    statusKey: 'processing',
    statusClass: 'bg-warning-subtle text-warning',
    user: 'يوسف عبد الرحمن',
    email: 'yousefr@moi.gov.qa',
    date: '30 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0017',
    title: 'شراء تراخيص برمجية',
    products: 8,
    notes: 4,
    status: 'مقبول',
    statusKey: 'accepted',
    statusClass: 'bg-success-subtle text-success',
    user: 'خالد أحمد الشيباني',
    email: 'khaleds@moi.gov.qa',
    date: '31 يناير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0018',
    title: 'تحديث قواعد البيانات',
    products: 5,
    notes: 6,
    status: 'قيد المعالجة',
    statusKey: 'processing',
    statusClass: 'bg-warning-subtle text-warning',
    user: 'سعود محمد علي',
    email: 'saoudm@moi.gov.qa',
    date: '01 فبراير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0019',
    title: 'استبدال أجهزة قديمة',
    products: 9,
    notes: 5,
    status: 'مرفوض',
    statusKey: 'rejected',
    statusClass: 'bg-danger-subtle text-danger',
    user: 'طارق فهد الكواري',
    email: 'tariqk@moi.gov.qa',
    date: '02 فبراير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0020',
    title: 'تركيب كاميرات مراقبة',
    products: 12,
    notes: 8,
    status: 'مقبول',
    statusKey: 'accepted',
    statusClass: 'bg-success-subtle text-success',
    user: 'سيف محمد الأنصاري',
    email: 'saifm@moi.gov.qa',
    date: '03 فبراير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0021',
    title: 'توريد أجهزة خوادم',
    products: 4,
    notes: 7,
    status: 'قيد المعالجة',
    statusKey: 'processing',
    statusClass: 'bg-warning-subtle text-warning',
    user: 'بدر ناصر العطية',
    email: 'badern@moi.gov.qa',
    date: '04 فبراير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0022',
    title: 'تحديث أنظمة الموارد البشرية',
    products: 3,
    notes: 6,
    status: 'مقبول',
    statusKey: 'accepted',
    statusClass: 'bg-success-subtle text-success',
    user: 'ريم خالد حسن',
    email: 'reemh@moi.gov.qa',
    date: '05 فبراير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0023',
    title: 'تطوير تطبيق داخلي',
    products: 2,
    notes: 9,
    status: 'قيد المعالجة',
    statusKey: 'processing',
    statusClass: 'bg-warning-subtle text-warning',
    user: 'منى عبد الله يوسف',
    email: 'monay@moi.gov.qa',
    date: '06 فبراير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0024',
    title: 'إحلال أجهزة حاسوب',
    products: 15,
    notes: 4,
    status: 'مقبول',
    statusKey: 'accepted',
    statusClass: 'bg-success-subtle text-success',
    user: 'أحمد ناصر المري',
    email: 'ahmedm@moi.gov.qa',
    date: '07 فبراير 2025',
    selected: false
  },
  {
    ref: 'BDRS/2016/019/0025',
    title: 'خدمات استشارية تقنية',
    products: 1,
    notes: 10,
    status: 'مرفوض',
    statusKey: 'rejected',
    statusClass: 'bg-danger-subtle text-danger',
    user: 'ليلى حسن الكعبي',
    email: 'leilah@moi.gov.qa',
    date: '08 فبراير 2025',
    selected: false
  }
  ];

  filteredData = [...this.data];

  // ✅ STATUS FILTER
  filterByStatus(status: string) {
    this.selectedStatus = status;

    this.filteredData =
      status === 'all'
        ? [...this.data]
        : this.data.filter(row => row.statusKey === status);
  }

  // ✅ ROW SELECTION
  selectRow(row: any) {
    row.selected = !row.selected;
  }

  // ✅ SELECT ALL
  toggleAll(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.filteredData.forEach(r => r.selected = checked);
  }
}
