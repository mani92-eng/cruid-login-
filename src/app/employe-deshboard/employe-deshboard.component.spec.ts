import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDeshboardComponent } from './employe-deshboard.component';

describe('EmployeDeshboardComponent', () => {
  let component: EmployeDeshboardComponent;
  let fixture: ComponentFixture<EmployeDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
