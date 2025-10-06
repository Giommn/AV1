import { Peca } from "./peca.js";
import { Etapa } from "./Etapa.js";
import { Teste } from "./Teste.js";
export class Aeronave {
    codigo;
    modelo;
    tipo;
    capacidade;
    alcance;
    pecas = [];
    etapas = [];
    testes = [];
    constructor(codigo, modelo, tipo, capacidade, alcance) {
        this.codigo = codigo;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.alcance = alcance;
    }
    detalhes() {
        console.log("\n--- Detalhes da Aeronave ---");
        console.log(`Código: ${this.codigo}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Capacidade: ${this.capacidade}`);
        console.log(`Alcance: ${this.alcance}`);
        console.log("\n--- Peças Associadas ---");
        if (this.pecas.length === 0) {
            console.log("Nenhuma peça associada.");
        }
        else {
            this.pecas.forEach(p => console.log(`- ${p.nome} (Status: ${p.status})`));
        }
        console.log("\n--- Etapas de Produção ---");
        if (this.etapas.length === 0) {
            console.log("Nenhuma etapa associada.");
        }
        else {
            this.etapas.forEach(e => console.log(`- ${e.nome} (Status: ${e.status})`));
        }
    }
    salvar() {
        console.log(`Salvando: ${this.codigo}...`);
    }
    carregar() {
        console.log(`Carregando dados da aeronave`);
    }
}
//# sourceMappingURL=Aeronaves.js.map