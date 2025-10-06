export declare enum NivelPermissao {
    ADMINISTRADOR = "Administrador",
    ENGENHEIRO = "Engenheiro",
    OPERADOR = "Operador"
}
export declare class Funcionario {
    id: string;
    nome: string;
    telefone: string;
    endereco: string;
    usuario: string;
    senha: string;
    nivelPermissao: NivelPermissao;
    constructor(id: string, nome: string, telefone: string, endereco: string, usuario: string, senha: string, nivelPermissao: NivelPermissao);
    autenticar(usuario: string, senha: string): boolean;
    detalhes(): void;
    salvar(): void;
    carregar(): void;
}
//# sourceMappingURL=Funcionario.d.ts.map