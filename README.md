![Prévia do Mural de Pensamentos](./thumb.png)

# 💭 Mural de Pensamentos

Aplicação web para registrar pensamentos, frases, ideias e citações em um mural interativo.

O projeto foi desenvolvido durante os estudos de JavaScript para praticar operações CRUD, manipulação do DOM, módulos JavaScript e comunicação com uma API local utilizando Axios e JSON Server.

## ✨ Funcionalidades

- Cadastro de pensamentos com conteúdo e autoria;
- Exibição automática dos pensamentos salvos;
- Edição de pensamentos existentes;
- Exclusão individual pelo identificador;
- Atualização do mural sem recarregar a página;
- Limpeza do formulário após o cadastro ou edição;
- Mensagem informativa quando o mural está vazio.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estrutura e formulário da aplicação;
- **CSS3:** layout e identidade visual;
- **JavaScript:** regras, eventos e manipulação do DOM;
- **Axios:** comunicação assíncrona com a API;
- **JSON Server:** simulação de backend e persistência local;
- **Node.js:** execução do ambiente do JSON Server;
- **Git e GitHub:** versionamento e armazenamento do projeto.

## 🧠 Conceitos praticados

- Operações CRUD;
- Requisições `GET`, `POST`, `PUT` e `DELETE`;
- Funções assíncronas com `async` e `await`;
- Manipulação dinâmica do DOM;
- Eventos de formulário e clique;
- Objetos e funções;
- Tratamento de erros com `try...catch`;
- Módulos com `import` e `export`;
- Separação de responsabilidades entre API, interface e lógica principal.

## 🔄 Operações da API

| Operação | Método | Rota |
| --- | --- | --- |
| Listar pensamentos | `GET` | `/pensamentos` |
| Cadastrar pensamento | `POST` | `/pensamentos` |
| Buscar por ID | `GET` | `/pensamentos/:id` |
| Editar pensamento | `PUT` | `/pensamentos/:id` |
| Excluir pensamento | `DELETE` | `/pensamentos/:id` |

## 📁 Estrutura do projeto

```text
mural-de-pensamentos-js/
├── assets/
│   └── imagens/
├── backend/
│   ├── db.json
│   └── package.json
├── css/
│   └── styles.css
├── docs/
│   └── documentacao-javascript.md
├── JS/
│   ├── api.js
│   ├── main.js
│   └── ui.js
├── index.html
└── README.md
```

## 📘 Documentação do JavaScript

As explicações sobre as funções, requisições HTTP, módulos, eventos, DOM e nomenclaturas foram separadas do código principal.

<a href="./docs/documentacao-javascript.md">
  <img src="https://img.shields.io/badge/Ver_documentação-8A2BE2?style=for-the-badge&logo=javascript&logoColor=white" alt="Documentação do JavaScript">
</a>

## ▶️ Como executar

Você precisa ter o [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório:

```bash
git clone https://github.com/vinicius-antunes/mural-de-pensamentos-js.git
```

2. Acesse a pasta do backend:

```bash
cd mural-de-pensamentos-js/backend
```

3. Instale o JSON Server, caso ainda não esteja instalado:

```bash
npm install -g json-server
```

4. Inicie a API local:

```bash
npm start
```

5. Confirme que a API está disponível em:

```text
http://localhost:3000/pensamentos
```

6. Abra o `index.html` utilizando a extensão **Live Server** do Visual Studio Code.

## ℹ️ Observação

Este é um projeto educacional. O JSON Server simula um backend e armazena os dados localmente no arquivo `backend/db.json`. Para utilizar o mural, o servidor local precisa permanecer em execução.

## 🚧 Melhorias futuras

- Adicionar confirmação antes da exclusão;
- Criar mensagens visuais de sucesso e erro;
- Validar e limitar o tamanho dos textos;
- Adicionar pesquisa por conteúdo ou autoria;
- Criar filtros e ordenação;
- Melhorar a adaptação para celulares;
- Integrar o projeto com uma API e banco de dados reais.

## 👨‍💻 Autor

Desenvolvido por **Vinicius Antunes** durante seus estudos de desenvolvimento web.

<a href="https://github.com/vinicius-antunes">
  <img src="https://img.shields.io/badge/GitHub-8A2BE2?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
