import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderComponent } from './layout-header.component';

describe('LayoutHeaderComponent', () => {
    let component: LayoutHeaderComponent;
    let fixture: ComponentFixture<LayoutHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LayoutHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LayoutHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
