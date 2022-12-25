import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCountComponent } from './main-count.component';

describe('MainCountComponent', () => {
  let component: MainCountComponent;
  let fixture: ComponentFixture<MainCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
