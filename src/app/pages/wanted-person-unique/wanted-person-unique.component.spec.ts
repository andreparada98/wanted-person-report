import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedPersonUniqueComponent } from './wanted-person-unique.component';

describe('WantedPersonUniqueComponent', () => {
  let component: WantedPersonUniqueComponent;
  let fixture: ComponentFixture<WantedPersonUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WantedPersonUniqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WantedPersonUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
