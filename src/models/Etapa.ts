import { Funcionario } from "./Funcionario.js";

export enum StatusEtapa {
    PENDENTE = 'Pendente',
    ANDAMENTO = 'Em Andamento',
    CONCLUIDA = 'Concluída'
}

export class Etapa {
    nome: string;
    prazo: string;
    status: StatusEtapa;
    funcionarios: Funcionario[] = [];

    constructor(nome: string, prazo: string) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = StatusEtapa.PENDENTE;
    }

    iniciar(): void {
        this.status = StatusEtapa.ANDAMENTO;
    }

    finalizar(): void {
        this.status = StatusEtapa.CONCLUIDA;
    }

    associarFuncionario(funcionario: Funcionario): void {
        if (!this.funcionarios.some(f => f.id === funcionario.id)) {
            this.funcionarios.push(funcionario);
        }
    }
    
    listarFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }
}