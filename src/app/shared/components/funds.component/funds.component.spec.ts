import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsComponent } from './funds.component';

describe('FundsComponent', () => {
  let component: FundsComponent;
  let fixture: ComponentFixture<FundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
