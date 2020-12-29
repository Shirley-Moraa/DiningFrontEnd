import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeniorComponent } from './create-senior.component';

describe('CreateSeniorComponent', () => {
  let component: CreateSeniorComponent;
  let fixture: ComponentFixture<CreateSeniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSeniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
