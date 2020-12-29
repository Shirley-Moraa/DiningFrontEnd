import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeniorComponent } from './update-senior.component';

describe('UpdateSeniorComponent', () => {
  let component: UpdateSeniorComponent;
  let fixture: ComponentFixture<UpdateSeniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSeniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
