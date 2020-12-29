import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorDetailsComponent } from './senior-details.component';

describe('SeniorDetailsComponent', () => {
  let component: SeniorDetailsComponent;
  let fixture: ComponentFixture<SeniorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
