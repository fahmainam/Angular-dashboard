import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {

  private readonly _items$ = new BehaviorSubject<BreadcrumbItem[]>([]);
  readonly items$ = this._items$.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const items: BreadcrumbItem[] = [];
        this.build(this.route.root, '', items);
        this._items$.next(items);
      });
  }

  private build(
    route: ActivatedRoute,
    url: string,
    items: BreadcrumbItem[]
  ): void {
    for (const child of route.children) {
      const path = child.snapshot.url.map(s => s.path).join('/');
      const nextUrl = path ? `${url}/${path}` : url;

      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        items.push({ label, link: nextUrl || '/dashboard' });
      }

      this.build(child, nextUrl, items);
    }
  }
}
