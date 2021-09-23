import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzeplywomierzComponent } from './przeplywomierz.component';

describe('PrzeplywomierzComponent', () => {
  let component: PrzeplywomierzComponent;
  let fixture: ComponentFixture<PrzeplywomierzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrzeplywomierzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzeplywomierzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
