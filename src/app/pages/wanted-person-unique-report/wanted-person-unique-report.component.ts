import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OcorrenciasInformacoesDesaparecidoService } from '../../services/ocorrencias-informacoes-desaparecido/ocorrencias-informacoes-desaparecido.service';
import { OcorrenciasInformacoesDesaparecidoDto } from '../../services/ocorrencias-informacoes-desaparecido/ocorrencias-informacoes-desaparecido.dto';
import { PessoasUniqueService } from '../../services/pessoas-unique/pessoas-unique.service';
import { takeUntil } from 'rxjs';
import { BaseComponent } from '../../shared/helpers/base-component';

@Component({
    selector: 'XWantedPersonUniqueReport',
    templateUrl: './wanted-person-unique-report.component.html',
})
export class WantedPersonUniqueReportComponent extends BaseComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private pessoasUniqueService: PessoasUniqueService,
        private ocorrenciasInformacoesDesaparecidoService: OcorrenciasInformacoesDesaparecidoService,
    ) {
        super();
    }
    form = this.formBuilder.group({
        descricao: [undefined, Validators.required],
        ocoId: [0, Validators.required],
        informacao: [undefined, Validators.required],
        data: [undefined, Validators.required],
        anexos: [undefined],
    });

    ngOnInit(): void {
        this.setOcoIdValueOnForm();
    }

    private setOcoIdValueOnForm() {
        this.pessoasUniqueService.execute({ personId: this.route.snapshot.params['id'] }).subscribe((response) => {
            this.form.get('ocoId')?.setValue(response.ultimaOcorrencia?.ocoId || 0);
        });
    }

    closeModal(): void {
        this.router.navigate([{ outlets: { modal: null } }], { relativeTo: this.route.parent });
    }

    onSubmit(): void {
        if (this.form.invalid) return this.form.markAllAsTouched();
        const formValue = this.form.value;
        const payload: OcorrenciasInformacoesDesaparecidoDto = {
            descricao: formValue.descricao || '',
            ocoId: formValue.ocoId || 0,
            informacao: formValue.informacao || '',
            data: formValue.data || new Date(),
            anexos: formValue.anexos || [],
        };
        this.ocorrenciasInformacoesDesaparecidoService
            .execute(payload)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(() => {
                this.closeModal();
            });
    }

    get formData() {
        return this.form.get('data');
    }

    get formDescricao() {
        return this.form.get('descricao');
    }

    get formInformacao() {
        return this.form.get('informacao');
    }
}
