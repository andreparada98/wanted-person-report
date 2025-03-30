import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedPersonsComponent } from './wanted-persons.component';

describe('WantedPersonsComponent', () => {
    let component: WantedPersonsComponent;
    let fixture: ComponentFixture<WantedPersonsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WantedPersonsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WantedPersonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
