import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/helpers/base-component';
import { PessoasUniqueService } from '../../services/pessoas-unique/pessoas-unique.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasUniqueResponse } from '../../services/pessoas-unique/pessoas-unique.response';
import { Location } from '@angular/common';

@Component({
    selector: 'XWantedPersonUnique',
    templateUrl: './wanted-person-unique.component.html',
    styleUrl: './wanted-person-unique.component.scss',
})
export class WantedPersonUniqueComponent extends BaseComponent implements OnInit {
    constructor(
        private pessoasUniqueService: PessoasUniqueService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        super();
    }

    public data?: PessoasUniqueResponse;

    ngOnInit(): void {
        this.getPessoaUnique();
    }

    private getPessoaUnique() {
        const personId = this.route.snapshot.params['id'];
        this.pessoasUniqueService.execute({ personId }).subscribe({
            next: (response) => {
                this.data = response;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }

    downloadPoster(url: string, nome: string): void {
        const link = document.createElement('a');
        link.href = url;
        link.download = `${nome}-cartaz.jpg`;
        link.click();
    }

    onImgError(event: Event): void {
        const imgElement = event.target as HTMLImageElement;
        imgElement.src = 'assets/images/image-not-found.png';
    }

    goBack(): void {
        this.router.navigate(['/']);
    }

    openReportModal(): void {
        this.router.navigate([{ outlets: { modal: ['report'] } }], { relativeTo: this.route });
    }
}
