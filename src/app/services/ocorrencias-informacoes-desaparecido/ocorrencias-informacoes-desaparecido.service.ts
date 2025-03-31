import { Injectable } from '@angular/core';
import { OcorrenciasInformacoesDesaparecidoDto } from './ocorrencias-informacoes-desaparecido.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { toHttpParams } from '../../shared/helpers/transform-http-params';
import { isDefined } from '../../shared/helpers/is-defined';

@Injectable({
    providedIn: 'root',
})
export class OcorrenciasInformacoesDesaparecidoService {
    constructor(private httpClient: HttpClient) {}
    execute(payload: OcorrenciasInformacoesDesaparecidoDto) {
        const { anexos, ...data } = payload;
        const formData: FormData = new FormData();

        if (isDefined(anexos)) {
            anexos.forEach((x: File) => {
                formData.append('files', x, x.name);
            });
        }

        const params = toHttpParams(data);

        return this.httpClient.post<OcorrenciasInformacoesDesaparecidoDto[]>(
            `${environment.api_url}/ocorrencias/informacoes-desaparecido`,
            formData,
            {
                params,
            },
        );
    }
}
