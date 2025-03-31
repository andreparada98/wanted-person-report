import { TestBed } from '@angular/core/testing';

import { OcorrenciasInformacoesDesaparecidoService } from './ocorrencias-informacoes-desaparecido.service';

describe('OcorrenciasInformacoesDesaparecidoService', () => {
  let service: OcorrenciasInformacoesDesaparecidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcorrenciasInformacoesDesaparecidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
