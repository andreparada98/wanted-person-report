import { Component, OnInit } from '@angular/core';
import { PessoasAbertoFiltroService } from '../../services/pessoas-aberto-filtro/pessoas-aberto-filtro.service';
import { PessoasAbertoFiltroResponse } from '../../services/pessoas-aberto-filtro/pessoas-aberto-filtro.response';

@Component({
    selector: 'app-wanted-persons',
    templateUrl: './wanted-persons.component.html',
    styleUrl: './wanted-persons.component.scss',
})
export class WantedPersonsComponent implements OnInit {
    constructor(private pessoasAbertoFiltroService: PessoasAbertoFiltroService) {}
    pessoasAbertoFiltroResponse: PessoasAbertoFiltroResponse[] = [];

    ngOnInit(): void {
        this.pessoasAbertoFiltroService.execute({}).subscribe({
            next: (res) => {
                this.pessoasAbertoFiltroResponse = res.content;
            },
            error: (err) => {
                console.error(err);
            },
        });
    }
}
