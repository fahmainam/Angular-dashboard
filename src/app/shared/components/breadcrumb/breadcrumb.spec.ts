import { TestBed } from '@angular/core/testing';
import { BreadcrumbService } from "../../services/breadcrumb.services.ts/breadcrumb.service";

describe('BreadcrumbService', () => {
  let service: BreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadcrumbService);
  });

  it('should set items', () => {
    service.set([{ label: 'Test' }]);
    service.items$.subscribe(items => {
      expect(items.length).toBe(1);
    });
  });
});
