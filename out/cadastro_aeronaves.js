import { readFileSync, writeFileSync } from 'fs';
import * as readline from 'readline';
export class Aeronave {
    codigo;
    modelo;
    tipo;
    capacidade;
    alcance;
    constructor(codigo, modelo, tipo, capacidade, alcance) {
        this.codigo = codigo;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.alcance = alcance;
    }
    detalhes() {
        console.log("Detalhes da Aeronave: ");
        console.log(`Código: ${this.codigo}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Capacidade: ${this.capacidade}`);
        console.log(`Alcance: ${this.alcance}`);
    }
    salvar() {
        console.log(`Salvando: ${this.codigo}...`);
    }
    carregar() {
        console.log(`carregando dados da aeronave`);
    }
}
function carregar_dados() {
    try {
        const dados_do_arquivo = readFileSync('aeronaves.json', 'utf-8');
        const dados_carregados = JSON.parse(dados_do_arquivo);
        if (Array.isArray(dados_carregados)) {
            return dados_carregados;
        }
        else {
            return [];
        }
    }
    catch (erro) {
        console.log("Arquivo 'aeronaves.json' não encontrado. Um novo será criado.");
        return [];
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function perguntar(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
function salvarDados(aeronaves_pra_salvar) {
    console.log('\nSalvando dados em aeronaves.json...');
    const dados_em_json = JSON.stringify(aeronaves_pra_salvar, null, 2);
    try {
        writeFileSync('aeronaves.json', dados_em_json);
        console.log('Dados salvos com sucesso!');
    }
    catch (erro) {
        console.error('Ocorreu um erro ao salvar o arquivo:', erro);
    }
}
async function iniciarCadastro() {
    const todas_aeronaves = carregar_dados();
    console.log('Iniciar Cadastro de Nova Aeronave: ', 'quantidade total de aeronaves cadastradas: ', todas_aeronaves.length, 'e são: ', todas_aeronaves);
    const cod_q = await perguntar('Qual o código da aeronave? ');
    const model_q = await perguntar('Qual o modelo da aeronave? ');
    const tipo_q = await perguntar('Qual o tipo (comercial/militar)? ');
    const capacity_q = await perguntar('Qual a capacidade? ');
    const range_q = await perguntar('Qual o alcance? ');
    rl.close();
    const nova_aeronave = new Aeronave(cod_q, model_q, tipo_q, parseInt(capacity_q), parseInt(range_q));
    todas_aeronaves.push(nova_aeronave);
    nova_aeronave.detalhes();
    salvarDados(todas_aeronaves);
}
iniciarCadastro();
//# sourceMappingURL=cadastro_aeronaves.js.map