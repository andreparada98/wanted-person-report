import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWantedPersonStatusComponent } from './select-wanted-person-status.component';

describe('SelectWantedPersonStatusComponent', () => {
  let component: SelectWantedPersonStatusComponent;
  let fixture: ComponentFixture<SelectWantedPersonStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectWantedPersonStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectWantedPersonStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
