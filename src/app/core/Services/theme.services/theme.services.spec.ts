import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeServices } from './theme.services';

describe('ThemeServices', () => {
  let component: ThemeServices;
  let fixture: ComponentFixture<ThemeServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
