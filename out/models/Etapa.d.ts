import { Funcionario } from "./Funcionario.js";
export declare enum StatusEtapa {
    PENDENTE = "Pendente",
    ANDAMENTO = "Em Andamento",
    CONCLUIDA = "Conclu\u00EDda"
}
export declare class Etapa {
    nome: string;
    prazo: string;
    status: StatusEtapa;
    funcionarios: Funcionario[];
    constructor(nome: string, prazo: string);
    iniciar(): void;
    finalizar(): void;
    associarFuncionario(funcionario: Funcionario): void;
    listarFuncionarios(): Funcionario[];
}
//# sourceMappingURL=Etapa.d.ts.map