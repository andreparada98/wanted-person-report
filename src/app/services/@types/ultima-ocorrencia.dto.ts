import { ListaCartaz } from './lista-cartaz.dto';
import { OcorrenciaEntrevDesapDTO } from './ocorrencia-entrev-desap.dto';

export interface UltimaOcorrencia {
    dtDesaparecimento: Date;
    dataLocalizacao?: Date;
    encontradoVivo: boolean;
    localDesaparecimentoConcat: string;
    ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO;
    listaCartaz: ListaCartaz[];
    ocoId: number;
}
