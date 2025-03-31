import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LoadingState {
    isLoading: boolean;
    message: string;
}

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private _loadingSubject = new BehaviorSubject<LoadingState>({ isLoading: false, message: '' });
    public loading$ = this._loadingSubject.asObservable();

    show(message: string): void {
        this._loadingSubject.next({ isLoading: true, message });
    }

    hide(): void {
        this._loadingSubject.next({ isLoading: false, message: '' });
    }
}
