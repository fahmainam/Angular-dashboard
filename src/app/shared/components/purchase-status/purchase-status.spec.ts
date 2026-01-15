import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseStatus } from './purchase-status';

describe('PurchaseStatus', () => {
  let component: PurchaseStatus;
  let fixture: ComponentFixture<PurchaseStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
