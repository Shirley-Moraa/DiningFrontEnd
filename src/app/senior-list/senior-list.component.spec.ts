import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorListComponent } from './senior-list.component';

describe('SeniorListComponent', () => {
  let component: SeniorListComponent;
  let fixture: ComponentFixture<SeniorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
