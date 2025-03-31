import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoasUniqueDto } from './pessoas-unique.dto';
import { PessoasUniqueResponse } from './pessoas-unique.response';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class PessoasUniqueService {
    constructor(private httpClient: HttpClient) {}
    execute(payload: PessoasUniqueDto) {
        return this.httpClient.get<PessoasUniqueResponse>(`${environment.api_url}/pessoas/${payload.personId}`);
    }
}
