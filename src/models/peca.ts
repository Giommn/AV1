export enum TipoPeca {
    NACIONAL = 'Nacional',
    IMPORTADA = 'Importada'
}

export enum StatusPeca {
    EM_PRODUCAO = 'Em Produção',
    EM_TRANSPORTE = 'Em Transporte',
    PRONTA = 'Pronta para Uso'
}

export class Peca {
    nome: string;
    tipo: TipoPeca;
    fornecedor: string;
    status: StatusPeca;

    constructor(nome: string, tipo: TipoPeca, fornecedor: string, status: StatusPeca) {
        this.nome = nome;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
        this.status = status;
    }

    detalhes(): void {
        console.log(`\n--- Detalhes da Peça ---`);
        console.log(`Peça: ${this.nome} (${this.tipo})`);
        console.log(`Fornecedor: ${this.fornecedor}`);
        console.log(`Status: ${this.status}`);
    }
    
    salvar(): void {
        console.log(`(Método salvar da peça ${this.nome})`);
    }
    
    carregar(): void {
        console.log(`(Método carregar da peça ${this.nome})`);
    }

    atualizarStatus(novoStatus: StatusPeca): void {
        this.status = novoStatus;
        console.log(`Status da peça ${this.nome} atualizado para: ${this.status}`);
    }
}