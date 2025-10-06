export declare enum TipoTeste {
    ELETRICO = "El\u00E9trico",
    HIDRAULICO = "Hidr\u00E1ulico",
    AERODINAMICO = "Aerodin\u00E2mico"
}
export declare enum ResultadoTeste {
    APROVADO = "Aprovado",
    REPROVADO = "Reprovado"
}
export declare class Teste {
    tipo: TipoTeste;
    resultado: ResultadoTeste;
    constructor(tipo: TipoTeste, resultado: ResultadoTeste);
}
//# sourceMappingURL=Teste.d.ts.map