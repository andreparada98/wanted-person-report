export interface PessoasAbertoFiltroResponse {
    id: number;
    nome: string;
    idade: number;
    sexo: string;
    vivo: boolean;
    urlFoto: string;
    ultimaOcorrencia?: UltimaOcorrencia;
}

export interface UltimaOcorrencia {
    dtDesaparecimento: Date;
    dataLocalizacao?: string;
    encontradoVivo: boolean;
    localDesaparecimentoConcat: string;
    ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO;
    listaCartaz: ListaCartaz[];
    ocoId: number;
}

export interface OcorrenciaEntrevDesapDTO {
    informacao: string;
    vestimentasDesaparecido: string;
}

export interface ListaCartaz {
    urlCartaz: string;
    tipoCartaz: string;
}
