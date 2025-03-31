import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedPersonCardComponent } from './wanted-person-card.component';

describe('WantedPersonCardComponent', () => {
    let component: WantedPersonCardComponent;
    let fixture: ComponentFixture<WantedPersonCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WantedPersonCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WantedPersonCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
