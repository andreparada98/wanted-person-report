import { UltimaOcorrencia } from '../@types/ultima-ocorrencia.dto';

export interface PessoasUniqueResponse {
    nome: string;
    idade: number;
    sexo: string;
    vivo: boolean;
    urlFoto: string;
    ultimaOcorrencia?: UltimaOcorrencia;
}
