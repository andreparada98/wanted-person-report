import { TestBed } from '@angular/core/testing';

import { PessoasAbertoFiltroService } from './pessoas-aberto-filtro.service';

describe('PessoasAbertoFiltroService', () => {
  let service: PessoasAbertoFiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoasAbertoFiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
