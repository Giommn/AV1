import { Funcionario } from "./Funcionario.js";
export var StatusEtapa;
(function (StatusEtapa) {
    StatusEtapa["PENDENTE"] = "Pendente";
    StatusEtapa["ANDAMENTO"] = "Em Andamento";
    StatusEtapa["CONCLUIDA"] = "Conclu\u00EDda";
})(StatusEtapa || (StatusEtapa = {}));
export class Etapa {
    nome;
    prazo;
    status;
    funcionarios = [];
    constructor(nome, prazo) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = StatusEtapa.PENDENTE;
    }
    iniciar() {
        this.status = StatusEtapa.ANDAMENTO;
    }
    finalizar() {
        this.status = StatusEtapa.CONCLUIDA;
    }
    associarFuncionario(funcionario) {
        if (!this.funcionarios.some(f => f.id === funcionario.id)) {
            this.funcionarios.push(funcionario);
        }
    }
    listarFuncionarios() {
        return this.funcionarios;
    }
}
//# sourceMappingURL=Etapa.js.map