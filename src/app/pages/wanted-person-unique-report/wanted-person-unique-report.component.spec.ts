import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedPersonUniqueReportComponent } from './wanted-person-unique-report.component';

describe('WantedPersonUniqueReportComponent', () => {
  let component: WantedPersonUniqueReportComponent;
  let fixture: ComponentFixture<WantedPersonUniqueReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WantedPersonUniqueReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WantedPersonUniqueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
