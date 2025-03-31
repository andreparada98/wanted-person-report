import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoasAbertoFiltroDto } from './pessoas-aberto-filtro.dto';
import { toHttpParams } from '../../shared/helpers/transform-http-params';
import { environment } from '../../../environments/environment';
import { PessoasAbertoFiltroResponse } from './pessoas-aberto-filtro.response';
import { BaseListResponse } from '../@types/base-list-response';

@Injectable({
    providedIn: 'root',
})
export class PessoasAbertoFiltroService {
    constructor(private httpClient: HttpClient) {}
    execute(payload: PessoasAbertoFiltroDto) {
        const params = toHttpParams(payload);

        return this.httpClient.get<BaseListResponse<PessoasAbertoFiltroResponse>>(`${environment.api_url}/pessoas/aberto/filtro`, { params });
    }
}
