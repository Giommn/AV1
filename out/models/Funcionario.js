export var NivelPermissao;
(function (NivelPermissao) {
    NivelPermissao["ADMINISTRADOR"] = "Administrador";
    NivelPermissao["ENGENHEIRO"] = "Engenheiro";
    NivelPermissao["OPERADOR"] = "Operador";
})(NivelPermissao || (NivelPermissao = {}));
export class Funcionario {
    id;
    nome;
    telefone;
    endereco;
    usuario;
    senha;
    nivelPermissao;
    constructor(id, nome, telefone, endereco, usuario, senha, nivelPermissao) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.usuario = usuario;
        this.senha = senha;
        this.nivelPermissao = nivelPermissao;
    }
    autenticar(usuario, senha) {
        return this.usuario === usuario && this.senha === senha;
    }
    detalhes() {
        console.log(`\n--- Detalhes do Funcionário ---`);
        console.log(`Funcionário: ${this.nome} (ID: ${this.id})`);
        console.log(`Usuário: ${this.usuario}`);
        console.log(`Nível de Permissão: ${this.nivelPermissao}`);
    }
    salvar() {
        console.log(`(Método salvar do funcionário ${this.nome} não implementado)`);
    }
    carregar() {
        console.log(`(Método carregar do funcionário ${this.nome} não implementado)`);
    }
}
//# sourceMappingURL=Funcionario.js.map