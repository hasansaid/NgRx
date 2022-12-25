import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountComponent } from './add-count.component';

describe('AddCountComponent', () => {
  let component: AddCountComponent;
  let fixture: ComponentFixture<AddCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
