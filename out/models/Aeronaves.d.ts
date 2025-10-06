import { Peca } from "./peca.js";
import { Etapa } from "./Etapa.js";
import { Teste } from "./Teste.js";
export declare class Aeronave {
    codigo: string;
    modelo: string;
    tipo: string;
    capacidade: number;
    alcance: number;
    pecas: Peca[];
    etapas: Etapa[];
    testes: Teste[];
    constructor(codigo: string, modelo: string, tipo: string, capacidade: number, alcance: number);
    detalhes(): void;
    salvar(): void;
    carregar(): void;
}
//# sourceMappingURL=Aeronaves.d.ts.map