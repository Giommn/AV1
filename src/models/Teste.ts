export enum TipoTeste {
    ELETRICO = 'Elétrico',
    HIDRAULICO = 'Hidráulico',
    AERODINAMICO = 'Aerodinâmico'
}

export enum ResultadoTeste {
    APROVADO = 'Aprovado',
    REPROVADO = 'Reprovado'
}

export class Teste {
    tipo: TipoTeste;
    resultado: ResultadoTeste;

    constructor(tipo: TipoTeste, resultado: ResultadoTeste) {
        this.tipo = tipo;
        this.resultado = resultado;
    }
}