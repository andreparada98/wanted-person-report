export interface PessoasAbertoFiltroDto {
    nome?: string;
    faixaIdadeInicial?: number;
    faixaIdadeFinal?: number;
    sexo?: 'MASCULINO' | 'FEMININO';
    pagina?: number;
    porPagina?: number;
    status?: 'DESAPARECIDO' | 'LOCALIZADO';
}
