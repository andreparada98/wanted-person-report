import { TestBed } from '@angular/core/testing';

import { PessoasUniqueService } from './pessoas-unique.service';

describe('PessoasUniqueService', () => {
  let service: PessoasUniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoasUniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
