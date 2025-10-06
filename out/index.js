import * as readline from 'readline';
import { Aeronave } from './models/Aeronaves.js';
import { Peca, TipoPeca, StatusPeca } from './models/peca.js';
import { Funcionario, NivelPermissao } from "./models/Funcionario.js";
import { Etapa } from './models/Etapa.js';
import { Teste, TipoTeste, ResultadoTeste } from './models/Teste.js';
import { Relatorio } from './models/Relatorio.js';
import { carregarDados, salvarDados } from './services/Aeronave_service.js';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const arquivo_funcionarios = 'funcionarios.json';
const arquivo_aeronaves = 'aeronaves.json';
const arquivo_pecas = 'pecas.json';
function perguntar(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
function stringParaNivelPermissao(valor) {
    if (!valor) {
        return NivelPermissao.OPERADOR;
    }
    const chave = Object.keys(NivelPermissao).find(key => NivelPermissao[key].toLowerCase() === valor.toLowerCase());
    return NivelPermissao[chave] || NivelPermissao.OPERADOR;
}
async function escolherItem(lista, mensagem, display) {
    if (lista.length === 0) {
        return null;
    }
    lista.forEach((item, index) => console.log(`${index + 1}. ${display(item)}`));
    const escolha = parseInt(await perguntar(mensagem)) - 1;
    return lista[escolha] || null;
}
async function cadastrarNovaAeronave() {
    console.log('\n--- Cadastro de Nova Aeronave ---');
    const todasAeronaves = carregarDados(arquivo_aeronaves);
    const codigo = await perguntar('Código da aeronave: ');
    const modelo = await perguntar('Modelo da aeronave: ');
    const tipo = await perguntar('Tipo (Comercial/Militar): ');
    const capacidade = parseInt(await perguntar('Capacidade de passageiros: '));
    const alcance = parseInt(await perguntar('Alcance (km): '));
    const novaAeronave = new Aeronave(codigo, modelo, tipo, capacidade, alcance);
    todasAeronaves.push(novaAeronave);
    salvarDados(arquivo_aeronaves, todasAeronaves);
    console.log('Aeronave cadastrada com sucesso!');
}
function listarAeronaves() {
    console.log('\n--- Lista de Todas as Aeronaves ---');
    const todasAeronaves = carregarDados(arquivo_aeronaves);
    if (todasAeronaves.length === 0) {
        console.log('Nenhuma aeronave cadastrada.');
        return;
    }
    todasAeronaves.forEach(a => {
        const instancia = new Aeronave(a.codigo, a.modelo, a.tipo, a.capacidade, a.alcance);
        instancia.pecas = a.pecas || [];
        instancia.etapas = a.etapas || [];
        instancia.testes = a.testes || [];
        instancia.detalhes();
        console.log('------------------------------------');
    });
}
async function associarPecaAeronave() {
    console.log('\n--- Associar Peça a uma Aeronave ---');
    const todasAeronaves = carregarDados(arquivo_aeronaves);
    const todasPecas = carregarDados(arquivo_pecas);
    const aeronave = await escolherItem(todasAeronaves, "Escolha a aeronave: ", a => a.modelo);
    if (!aeronave) {
        console.log("Nenhuma aeronave disponível.");
        return;
    }
    const peca = await escolherItem(todasPecas, "Escolha a peça: ", p => p.nome);
    if (!peca) {
        console.log("Nenhuma peça disponível.");
        return;
    }
    const aeronaveAlvo = todasAeronaves.find(a => a.codigo === aeronave.codigo);
    if (aeronaveAlvo) {
        if (!aeronaveAlvo.pecas)
            aeronaveAlvo.pecas = [];
        aeronaveAlvo.pecas.push(peca);
        salvarDados(arquivo_aeronaves, todasAeronaves);
        console.log(`Peça '${peca.nome}' associada à aeronave '${aeronave.modelo}'.`);
    }
}
async function cadastrarNovaEtapa() {
    console.log('\n--- Cadastrar Nova Etapa de Produção ---');
    const todasAeronaves = carregarDados(arquivo_aeronaves);
    const aeronave = await escolherItem(todasAeronaves, "Para qual aeronave esta etapa se destina?: ", a => a.modelo);
    if (!aeronave) {
        console.log("Nenhuma aeronave disponível.");
        return;
    }
    const nomeEtapa = await perguntar('Nome da etapa (ex: Montagem da Fuselagem): ');
    const prazo = await perguntar('Prazo para conclusão: ');
    const novaEtapa = new Etapa(nomeEtapa, prazo);
    const aeronaveAlvo = todasAeronaves.find(a => a.codigo === aeronave.codigo);
    if (aeronaveAlvo) {
        if (!aeronaveAlvo.etapas)
            aeronaveAlvo.etapas = [];
        aeronaveAlvo.etapas.push(novaEtapa);
        salvarDados(arquivo_aeronaves, todasAeronaves);
        console.log(`Etapa '${nomeEtapa}' adicionada à aeronave '${aeronave.modelo}'.`);
    }
}
async function realizarTesteEmAeronave() {
    console.log('\n--- Realizar Teste em Aeronave ---');
    const todasAeronaves = carregarDados(arquivo_aeronaves);
    const aeronave = await escolherItem(todasAeronaves, "Escolha a aeronave para testar: ", a => a.modelo);
    if (!aeronave) {
        console.log("Nenhuma aeronave disponível.");
        return;
    }
    const tipoInput = await perguntar('Tipo de teste (Eletrico, Hidraulico, Aerodinamico): ');
    const resultadoInput = await perguntar('Resultado (Aprovado, Reprovado): ');
    const novoTeste = new Teste(tipoInput, resultadoInput);
    const aeronaveAlvo = todasAeronaves.find(a => a.codigo === aeronave.codigo);
    if (aeronaveAlvo) {
        if (!aeronaveAlvo.testes)
            aeronaveAlvo.testes = [];
        aeronaveAlvo.testes.push(novoTeste);
        salvarDados(arquivo_aeronaves, todasAeronaves);
        console.log(`Teste ${tipoInput} registrado para a aeronave ${aeronave.modelo}.`);
    }
}
async function gerarRelatorioFinal() {
    console.log('\n--- Gerar Relatório Final ---');
    const todasAeronaves = carregarDados(arquivo_aeronaves);
    const aeronave = await escolherItem(todasAeronaves, "Escolha a aeronave para gerar o relatório: ", a => a.modelo);
    if (!aeronave) {
        console.log("Nenhuma aeronave disponível.");
        return;
    }
    const nomeCliente = await perguntar('Digite o nome do cliente para o relatório: ');
    const aeronaveCompleta = carregarDados(arquivo_aeronaves).find(a => a.codigo === aeronave.codigo);
    if (aeronaveCompleta) {
        Relatorio.gerar(aeronaveCompleta, nomeCliente);
    }
}
async function cadastrarNovoFuncionario() {
    console.log('\n--- Cadastro de Novo Funcionário ---');
    const todosOsFuncionarios = carregarDados(arquivo_funcionarios);
    const id = await perguntar('Digite o ID (CPF) do funcionário: ');
    const nome = await perguntar('Nome completo: ');
    const telefone = await perguntar('Telefone: ');
    const endereco = await perguntar('Endereço: ');
    const usuario = await perguntar('Crie um nome de usuário para login: ');
    const senha = await perguntar('Crie uma senha: ');
    const permissaoInput = await perguntar('Nível de permissão (Administrador, Engenheiro, Operador): ');
    const permissaoEnum = stringParaNivelPermissao(permissaoInput);
    const novoFuncionario = new Funcionario(id, nome, telefone, endereco, usuario, senha, permissaoEnum);
    todosOsFuncionarios.push(novoFuncionario);
    salvarDados(arquivo_funcionarios, todosOsFuncionarios);
    console.log('Funcionário cadastrado com sucesso!');
}
function listarFuncionarios(solicitante) {
    if (solicitante.nivelPermissao !== NivelPermissao.ADMINISTRADOR) {
        console.log('\nERRO: Acesso negado! Apenas administradores podem listar funcionários.');
        return;
    }
    console.log('\n--- Lista de Todos os Funcionários ---');
    const todosOsFuncionarios = carregarDados(arquivo_funcionarios);
    if (todosOsFuncionarios.length === 0) {
        console.log('Nenhum funcionário cadastrado.');
        return;
    }
    todosOsFuncionarios.forEach(f => {
        const instancia = new Funcionario(f.id, f.nome, f.telefone, f.endereco, f.usuario, f.senha, f.nivelPermissao);
        instancia.detalhes();
        console.log('------------------------------------');
    });
}
async function realizarLogin() {
    console.log('\n--- Login no Sistema AeroCode ---');
    const todosOsFuncionarios = carregarDados(arquivo_funcionarios);
    if (todosOsFuncionarios.length === 0) {
        return null;
    }
    const usuario = await perguntar('Usuário: ');
    const senha = await perguntar('Senha: ');
    const funcionarioEncontrado = todosOsFuncionarios.find(f => {
        const permissaoEnum = stringParaNivelPermissao(f.nivelPermissao);
        const instancia = new Funcionario(f.id, f.nome, f.telefone, f.endereco, f.usuario, f.senha, permissaoEnum);
        return instancia.autenticar(usuario, senha);
    });
    if (funcionarioEncontrado) {
        console.log(`\nLogin bem-sucedido! Bem-vindo, ${funcionarioEncontrado.nome}.`);
        const permissaoEnum = stringParaNivelPermissao(funcionarioEncontrado.nivelPermissao);
        return new Funcionario(funcionarioEncontrado.id, funcionarioEncontrado.nome, funcionarioEncontrado.telefone, funcionarioEncontrado.endereco, funcionarioEncontrado.usuario, funcionarioEncontrado.senha, permissaoEnum);
    }
    else {
        console.log('\nUsuário ou senha inválidos!');
        return null;
    }
}
async function cadastrarPrimeiroAdministrador() {
    console.log('\n--- Configuração Inicial: Cadastro do Administrador ---');
    const id = await perguntar('Digite o ID (CPF) do administrador: ');
    const nome = await perguntar('Nome completo: ');
    const telefone = await perguntar('Telefone: ');
    const endereco = await perguntar('Endereço: ');
    const usuario = await perguntar('Crie um nome de usuário para login: ');
    const senha = await perguntar('Crie uma senha: ');
    const permissao = NivelPermissao.ADMINISTRADOR;
    const novoAdmin = new Funcionario(id, nome, telefone, endereco, usuario, senha, permissao);
    salvarDados(arquivo_funcionarios, [novoAdmin]);
    console.log('Administrador cadastrado com sucesso! Você já está logado.');
    return novoAdmin;
}
async function menuPrincipal(funcionarioLogado) {
    let loop = true;
    while (loop) {
        console.log(`\n--- AeroCode Menu (Logado como: ${funcionarioLogado.nome} | ${funcionarioLogado.nivelPermissao}) ---`);
        console.log('1. Cadastrar Aeronave');
        console.log('2. Listar Aeronaves');
        console.log('3. Associar Peça a Aeronave');
        console.log('4. Cadastrar Etapa de Produção');
        console.log('5. Realizar Teste em Aeronave');
        console.log('6. Gerar Relatório Final');
        console.log('--- Administração ---');
        console.log('7. Cadastrar Funcionário');
        console.log('8. Listar Funcionários (Admin)');
        console.log('0. Sair');
        const opcao = await perguntar('Escolha uma opção: ');
        switch (opcao) {
            case '1':
                await cadastrarNovaAeronave();
                break;
            case '2':
                listarAeronaves();
                break;
            case '3':
                await associarPecaAeronave();
                break;
            case '4':
                await cadastrarNovaEtapa();
                break;
            case '5':
                await realizarTesteEmAeronave();
                break;
            case '6':
                await gerarRelatorioFinal();
                break;
            case '7':
                await cadastrarNovoFuncionario();
                break;
            case '8':
                listarFuncionarios(funcionarioLogado);
                break;
            case '0':
                loop = false;
                console.log('\nSaindo do sistema...');
                break;
            default:
                console.log('\nOpção inválida! Tente novamente.');
                break;
        }
    }
}
async function iniciarSistema() {
    const todosFuncionarios = carregarDados(arquivo_funcionarios);
    let funcionarioLogado = null;
    if (todosFuncionarios.length === 0) {
        funcionarioLogado = await cadastrarPrimeiroAdministrador();
    }
    else {
        funcionarioLogado = await realizarLogin();
    }
    if (funcionarioLogado) {
        await menuPrincipal(funcionarioLogado);
    }
    else {
        console.log('Login falhou. Encerrando o programa.');
    }
    rl.close();
}
iniciarSistema();
//# sourceMappingURL=index.js.map