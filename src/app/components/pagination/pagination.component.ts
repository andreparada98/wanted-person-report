import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'XPagination',
    templateUrl: './pagination.component.html',
})
export class PaginationComponent {
    @Input() currentPage: number = 1;
    @Input() totalPages: number = 1;
    @Output() pageChange = new EventEmitter<number>();

    get pages(): (number | string)[] {
        const pages: (number | string)[] = [];
        if (this.totalPages <= 5) {
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }

        pages.push(1);

        if (this.currentPage > 3) {
            pages.push('...');
        }

        const start = Math.max(2, this.currentPage - 1);
        const end = Math.min(this.totalPages - 1, this.currentPage + 1);
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (this.currentPage < this.totalPages - 2) {
            pages.push('...');
        }

        pages.push(this.totalPages);
        return pages;
    }

    goToPage(page: number | string): void {
        if (typeof page === 'number' && page !== this.currentPage) {
            this.pageChange.emit(page);
        }
    }

    previousPage(): void {
        if (this.currentPage > 1) {
            this.pageChange.emit(this.currentPage - 1);
        }
    }

    nextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.pageChange.emit(this.currentPage + 1);
        }
    }
}
