import { UltimaOcorrencia } from '../@types/ultima-ocorrencia.dto';

export interface PessoasAbertoFiltroResponse {
    id: number;
    nome: string;
    idade: number;
    sexo: string;
    vivo: boolean;
    urlFoto: string;
    ultimaOcorrencia?: UltimaOcorrencia;
}
