export enum NivelPermissao {
    ADMINISTRADOR = 'Administrador',
    ENGENHEIRO = 'Engenheiro',
    OPERADOR = 'Operador'
}

export class Funcionario {
    id: string;
    nome: string;
    telefone: string;
    endereco: string;
    usuario: string;
    senha: string;
    nivelPermissao: NivelPermissao;

    constructor(id: string, nome: string, telefone: string, endereco: string, usuario: string, senha: string, nivelPermissao: NivelPermissao) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.usuario = usuario;
        this.senha = senha;
        this.nivelPermissao = nivelPermissao;
    }

    autenticar(usuario: string, senha: string): boolean {
        return this.usuario === usuario && this.senha === senha;
    }

    detalhes(): void {
        console.log(`\n--- Detalhes do Funcionário ---`);
        console.log(`Funcionário: ${this.nome} (ID: ${this.id})`);
        console.log(`Usuário: ${this.usuario}`);
        console.log(`Nível de Permissão: ${this.nivelPermissao}`);
    }

    salvar(): void {
        console.log(`(Método salvar do funcionário ${this.nome} não implementado)`);
    }

    carregar(): void {
        console.log(`(Método carregar do funcionário ${this.nome} não implementado)`);
    }
}