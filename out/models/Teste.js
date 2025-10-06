export var TipoTeste;
(function (TipoTeste) {
    TipoTeste["ELETRICO"] = "El\u00E9trico";
    TipoTeste["HIDRAULICO"] = "Hidr\u00E1ulico";
    TipoTeste["AERODINAMICO"] = "Aerodin\u00E2mico";
})(TipoTeste || (TipoTeste = {}));
export var ResultadoTeste;
(function (ResultadoTeste) {
    ResultadoTeste["APROVADO"] = "Aprovado";
    ResultadoTeste["REPROVADO"] = "Reprovado";
})(ResultadoTeste || (ResultadoTeste = {}));
export class Teste {
    tipo;
    resultado;
    constructor(tipo, resultado) {
        this.tipo = tipo;
        this.resultado = resultado;
    }
}
//# sourceMappingURL=Teste.js.map