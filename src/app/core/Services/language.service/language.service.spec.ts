import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let component: LanguageService;
  let fixture: ComponentFixture<LanguageService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
