import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService, LoadingState } from './loading.service';

@Component({
    selector: 'XLoading',
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.scss',
})
export class LoadingComponent {
    loading$: Observable<LoadingState>;

    constructor(private loadingService: LoadingService) {
        this.loading$ = this.loadingService.loading$;
    }
}
