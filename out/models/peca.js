export var TipoPeca;
(function (TipoPeca) {
    TipoPeca["NACIONAL"] = "Nacional";
    TipoPeca["IMPORTADA"] = "Importada";
})(TipoPeca || (TipoPeca = {}));
export var StatusPeca;
(function (StatusPeca) {
    StatusPeca["EM_PRODUCAO"] = "Em Produ\u00E7\u00E3o";
    StatusPeca["EM_TRANSPORTE"] = "Em Transporte";
    StatusPeca["PRONTA"] = "Pronta para Uso";
})(StatusPeca || (StatusPeca = {}));
export class Peca {
    nome;
    tipo;
    fornecedor;
    status;
    constructor(nome, tipo, fornecedor, status) {
        this.nome = nome;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
        this.status = status;
    }
    detalhes() {
        console.log(`\n--- Detalhes da Peça ---`);
        console.log(`Peça: ${this.nome} (${this.tipo})`);
        console.log(`Fornecedor: ${this.fornecedor}`);
        console.log(`Status: ${this.status}`);
    }
    salvar() {
        console.log(`(Método salvar da peça ${this.nome})`);
    }
    carregar() {
        console.log(`(Método carregar da peça ${this.nome})`);
    }
    atualizarStatus(novoStatus) {
        this.status = novoStatus;
        console.log(`Status da peça ${this.nome} atualizado para: ${this.status}`);
    }
}
//# sourceMappingURL=peca.js.map