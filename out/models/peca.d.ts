export declare enum TipoPeca {
    NACIONAL = "Nacional",
    IMPORTADA = "Importada"
}
export declare enum StatusPeca {
    EM_PRODUCAO = "Em Produ\u00E7\u00E3o",
    EM_TRANSPORTE = "Em Transporte",
    PRONTA = "Pronta para Uso"
}
export declare class Peca {
    nome: string;
    tipo: TipoPeca;
    fornecedor: string;
    status: StatusPeca;
    constructor(nome: string, tipo: TipoPeca, fornecedor: string, status: StatusPeca);
    detalhes(): void;
    salvar(): void;
    carregar(): void;
    atualizarStatus(novoStatus: StatusPeca): void;
}
//# sourceMappingURL=peca.d.ts.map