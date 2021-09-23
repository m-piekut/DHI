import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrefyComponent } from './strefy.component';

describe('StrefyComponent', () => {
  let component: StrefyComponent;
  let fixture: ComponentFixture<StrefyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrefyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrefyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
