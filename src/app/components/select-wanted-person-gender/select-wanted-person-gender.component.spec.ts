import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWantedPersonGenderComponent } from './select-wanted-person-gender.component';

describe('SelectWantedPersonGenderComponent', () => {
  let component: SelectWantedPersonGenderComponent;
  let fixture: ComponentFixture<SelectWantedPersonGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectWantedPersonGenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectWantedPersonGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
