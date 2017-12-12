import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemarkComponent } from './add-remark.component';

describe('AddRemarkComponent', () => {
  let component: AddRemarkComponent;
  let fixture: ComponentFixture<AddRemarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
