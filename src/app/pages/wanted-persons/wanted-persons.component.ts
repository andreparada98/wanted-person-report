import { Component, OnInit } from '@angular/core';
import { PessoasAbertoFiltroService } from '../../services/pessoas-aberto-filtro/pessoas-aberto-filtro.service';
import { PessoasAbertoFiltroResponse } from '../../services/pessoas-aberto-filtro/pessoas-aberto-filtro.response';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PessoasAbertoFiltroDto } from '../../services/pessoas-aberto-filtro/pessoas-aberto-filtro.dto';
import { debounceTime, distinctUntilChanged, merge, takeUntil } from 'rxjs';
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
        this.buildPageListener();
    }

    private buildPageListener() {
        this.form
            .get('pagina')
            ?.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.unsubscribe))
            .subscribe(() => {
                this.getPessoasAbertoFiltro();
            });
    }

    private buildFormFilterListener(): void {
        const filterObservables = [
            this.form.get('nome')?.valueChanges.pipe(distinctUntilChanged()),
            this.form.get('faixaIdadeInicial')?.valueChanges.pipe(distinctUntilChanged()),
            this.form.get('faixaIdadeFinal')?.valueChanges.pipe(distinctUntilChanged()),
            this.form.get('sexo')?.valueChanges.pipe(distinctUntilChanged()),
            this.form.get('status')?.valueChanges.pipe(distinctUntilChanged()),
        ].filter((obs) => obs !== undefined);

        merge(...filterObservables)
            .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.unsubscribe))
            .subscribe(() => {
                this.form.get('pagina')?.setValue(0);
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

    onPageChange(newPage: number): void {
        this.form.get('pagina')?.setValue(newPage - 1);
    }

    navigateToDetails(personId: number) {
        this.router.navigate(['/detalhes', personId]);
    }

    get currentPage() {
        return this.form.get('pagina')?.value || 0;
    }

    get displayCurrentPage(): number {
        return (this.form.get('pagina')?.value || 0) + 1;
    }
}
