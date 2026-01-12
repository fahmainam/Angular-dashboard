import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractStatusBarComponent } from './contract-bar-status';

describe('ContractStatusBarComponent', () => {
  let component: ContractStatusBarComponent;
  let fixture: ComponentFixture<ContractStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractStatusBarComponent], // ✅ standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(ContractStatusBarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges(); // ✅ REQUIRED
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
