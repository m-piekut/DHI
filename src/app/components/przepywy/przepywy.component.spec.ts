import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzepywyComponent } from './przepywy.component';

describe('PrzepywyComponent', () => {
  let component: PrzepywyComponent;
  let fixture: ComponentFixture<PrzepywyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrzepywyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzepywyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
