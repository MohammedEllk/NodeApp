import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewformcontactComponent } from './newformcontact.component';

describe('NewformcontactComponent', () => {
  let component: NewformcontactComponent;
  let fixture: ComponentFixture<NewformcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewformcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewformcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
