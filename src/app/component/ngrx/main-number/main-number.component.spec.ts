import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNumberComponent } from './main-number.component';

describe('MainNumberComponent', () => {
  let component: MainNumberComponent;
  let fixture: ComponentFixture<MainNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
