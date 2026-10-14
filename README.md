![Prévia do Mural de Pensamentos](./thumb.png)

# Mural de Pensamentos

Aplicação web educacional para registrar, visualizar, editar e excluir pensamentos, frases e citações. O projeto pratica operações CRUD, manipulação do DOM e comunicação assíncrona com uma API local.

## Funcionalidades

- Cadastrar pensamentos com conteúdo e autoria.
- Listar automaticamente os pensamentos salvos.
- Editar pensamentos existentes.
- Excluir pensamentos pelo identificador.
- Exibir uma mensagem quando o mural estiver vazio.
- Atualizar a interface sem recarregar a página.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Axios
- Node.js
- JSON Server

## Como o projeto funciona

O frontend utiliza o Axios para enviar requisições HTTP ao JSON Server:

| Operação | Método | Rota |
| --- | --- | --- |
| Listar | `GET` | `/pensamentos` |
| Cadastrar | `POST` | `/pensamentos` |
| Buscar por ID | `GET` | `/pensamentos/:id` |
| Editar | `PUT` | `/pensamentos/:id` |
| Excluir | `DELETE` | `/pensamentos/:id` |

Os dados são armazenados localmente no arquivo `backend/db.json`.

## Como executar

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

A API ficará disponível em:

```text
http://localhost:3000/pensamentos
```

5. Abra o `index.html` com a extensão Live Server do Visual Studio Code.

## Estrutura principal

```text
mural-de-pensamentos-js/
├── assets/
├── backend/
│   ├── db.json
│   └── package.json
├── css/
│   └── styles.css
├── JS/
│   ├── api.js
│   ├── main.js
│   └── ui.js
└── index.html
```

## Aprendizados

Neste projeto foram praticados:

- Funções assíncronas com `async` e `await`.
- Requisições HTTP com Axios.
- Operações CRUD.
- Manipulação dinâmica do DOM.
- Módulos JavaScript com `import` e `export`.
- Separação entre API, interface e lógica principal.

## Créditos

Projeto desenvolvido por **Vinicius Antunes** para fins educacionais, com base no curso de JavaScript da Alura.
