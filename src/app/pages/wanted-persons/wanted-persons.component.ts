import { Component, OnInit } from '@angular/core';
import { PessoasAbertoFiltroService } from '../../services/pessoas-aberto-filtro/pessoas-aberto-filtro.service';
import { PessoasAbertoFiltroResponse } from '../../services/pessoas-aberto-filtro/pessoas-aberto-filtro.response';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PessoasAbertoFiltroDto } from '../../services/pessoas-aberto-filtro/pessoas-aberto-filtro.dto';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { BaseComponent } from '../../shared/helpers/base-component';
import { Router } from '@angular/router';
import { isAllValuesNull } from '../../shared/helpers/is-all-values-null';
import { idadeRangeValidator } from '../../shared/validators/age-range.validator';

@Component({
    selector: 'XWantedPersons',
    templateUrl: './wanted-persons.component.html',
    styleUrl: './wanted-persons.component.scss',
})
export class WantedPersonsComponent extends BaseComponent implements OnInit {
    constructor(
        private pessoasAbertoFiltroService: PessoasAbertoFiltroService,
        private formBuilder: FormBuilder,
        private router: Router,
    ) {
        super();
    }

    form = this.formBuilder.group<PessoasAbertoFiltroDto>(
        {
            pagina: 0,
            porPagina: 10,
            nome: undefined,
            faixaIdadeInicial: undefined,
            faixaIdadeFinal: undefined,
            sexo: undefined,
            status: undefined,
        },
        {
            validators: [idadeRangeValidator],
        },
    );

    pessoasAbertoFiltroResponse: PessoasAbertoFiltroResponse[] = [];
    totalPages: number = 0;

    ngOnInit(): void {
        this.getPessoasAbertoFiltro();
        this.buildFormFilterListener();
    }

    private buildFormFilterListener() {
        this.form.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.unsubscribe)).subscribe(() => {
            const { pagina, porPagina, ...filterValues } = this.form.value;
            if (this.currentPage !== 0 && !isAllValuesNull(filterValues)) {
                this.form.get('pagina')?.setValue(0);
            }
            this.getPessoasAbertoFiltro();
        });
    }

    private getPessoasAbertoFiltro() {
        this.pessoasAbertoFiltroService
            .execute(this.form.value as PessoasAbertoFiltroDto)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe({
                next: (res) => {
                    this.pessoasAbertoFiltroResponse = res.content;
                    this.totalPages = res.totalPages;
                },
                error: (err) => {
                    console.error(err);
                },
            });
    }

    previousPage() {
        this.form.get('pagina')?.setValue(this.currentPage - 1);
    }

    nextPage() {
        this.form.get('pagina')?.setValue(this.currentPage + 1);
    }

    navigateToDetails(personId: number) {
        this.router.navigate(['/detalhes', personId]);
    }

    get currentPage() {
        return this.form.get('pagina')?.value || 0;
    }
}
