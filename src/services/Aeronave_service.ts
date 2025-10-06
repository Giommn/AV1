import { readFileSync, writeFileSync } from 'fs';

export function carregarDados<T>(nomeArquivo: string): T[] {
try {
const dadosDoArquivo = readFileSync(nomeArquivo, 'utf-8');
    
if (dadosDoArquivo.trim() === '') {
        return [];
    }

    const dadosCarregados = JSON.parse(dadosDoArquivo);
    
    if (Array.isArray(dadosCarregados)) {
        return dadosCarregados;
    } else {
        return [];
    }
} catch (erro) {
    return [];
}

  

}

export function salvarDados<T>(nomeArquivo: string, dados: T[]): void {
const dadosEmJson = JSON.stringify(dados, null, 2);
try {
writeFileSync(nomeArquivo, dadosEmJson);
console.log(`\nDados salvos com sucesso em ${nomeArquivo}!`);
} catch (erro) {
console.error('Ocorreu um erro ao salvar o arquivo:', erro);
}
}