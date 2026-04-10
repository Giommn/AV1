# ✈️ Aerocode - Sistema de Gestão para Produção de Aeronaves

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/status-funcional-green?style=for-the-badge)

Bem-vindo ao sistema **Aerocode**, uma solução robusta em **CLI (Interface de Linha de Comando)** desenvolvida em TypeScript para gerenciar o ciclo de vida completo da produção de aeronaves, desde o cadastro de componentes até a entrega final ao cliente.

---

## 🎯 Sobre o Projeto
Este sistema foi construído para centralizar as operações de fabricação aeronáutica. Ele utiliza conceitos avançados de Programação Orientada a Objetos (POO) e garante a integridade dos dados através de persistência em arquivos JSON.

O fluxo abrange desde o gerenciamento de funcionários com diferentes níveis de acesso até a geração de relatórios técnicos detalhados para exportação.

---

## ✨ Principais Funcionalidades

- **🔒 Gestão de Acessos e Funcionários**
  - Sistema de login com autenticação de usuário e senha.
  - Diferentes níveis de permissão: **Administrador, Engenheiro e Operador**.
  - Registro completo de dados (ID, telefone, endereço) e controle de visualização restrita para administradores.

- **🛩️ Controle de Aeronaves**
  - Cadastro detalhado: Código, Modelo, Tipo (Comercial/Militar), Capacidade e Alcance.
  - Visualização de detalhes que consolidam peças, etapas e testes vinculados à aeronave.

- **🛠️ Cadeia de Produção e Peças**
  - Registro de peças com especificação de origem (**Nacional/Importada**) e fornecedor.
  - Associação dinâmica de peças a aeronaves específicas.
  - Controle de etapas de produção com prazos e acompanhamento de status.

- **🧪 Garantia de Qualidade (Testes)**
  - Execução e registro de testes críticos: **Elétricos, Hidráulicos e Aerodinâmicos**.
  - Histórico de resultados (**Aprovado/Reprovado**) vinculado diretamente à aeronave.

- **📄 Relatórios e Persistência**
  - Geração automática de relatórios finais em arquivo `.txt` contendo o resumo da produção e dados do cliente.
  - Persistência de dados automática em arquivos `.json` (aeronaves, peças e funcionários).

---

## 💻 Tecnologias Utilizadas
- **[TypeScript](https://www.typescriptlang.org/):** Superset para JavaScript com tipagem estática.
- **[Node.js](https://nodejs.org/):** Ambiente de execução.
- **[FileSystem (fs)](https://nodejs.org/api/fs.html):** Manipulação de arquivos locais para persistência.
- **Readline:** Interface para captura de inputs no terminal.

---

## 🔧 Pré-requisitos
Antes de começar, você precisará ter instalado:
- **Node.js** (v18.0.0 ou superior)
- Um gerenciador de pacotes (**NPM** ou **Yarn**)

---

## 🚀 Como Executar

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/aerocode.git](https://github.com/seu-usuario/aerocode.git)

# 2. Entre na pasta do projeto
cd aerocode

# 3. Instale as dependências
npm install

# 4. Compile os arquivos TypeScript
npm run build

# 5. Inicie a aplicação
npm start