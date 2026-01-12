import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './dynamic-tabs';

describe('DynamicTabs', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
