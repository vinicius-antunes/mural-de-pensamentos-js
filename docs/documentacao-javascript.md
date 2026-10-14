# 📘 Documentação do JavaScript

Esta documentação apresenta as principais funções, responsabilidades dos arquivos e nomenclaturas utilizadas no projeto **Mural de Pensamentos**.

## 📁 Organização do código

O JavaScript foi dividido em três módulos:

- `api.js`: comunicação com o JSON Server;
- `ui.js`: criação e atualização dos elementos exibidos na página;
- `main.js`: inicialização da aplicação e tratamento do formulário.

Essa separação evita concentrar toda a lógica em um único arquivo.

## 🌐 API e banco local

A constante abaixo guarda o endereço-base da API:

```js
const URL_BASE = "http://localhost:3000";
```

O objeto `api` reúne as funções responsáveis pelas requisições HTTP.

### `buscarPensamentos()`

Realiza uma requisição `GET` e devolve todos os pensamentos cadastrados.

```js
const response = await axios.get(`${URL_BASE}/pensamentos`);
return response.data;
```

### `salvarUmPensamento(pensamento)`

Recebe um objeto com `conteudo` e `autoria` e realiza uma requisição `POST`.

### `buscarPensamentosPorId(id)`

Busca um único pensamento pelo identificador. Essa função é usada ao clicar no botão de edição.

### `editarPensamento(pensamento)`

Envia os dados atualizados por meio de uma requisição `PUT`. O ID determina qual registro será alterado.

### `excluirPensamento(id)`

Realiza uma requisição `DELETE` para remover o pensamento correspondente ao ID informado.

## 🖥️ Interface

O objeto `ui` controla os elementos exibidos no navegador.

### `renderizarPensamentos()`

- Limpa a lista exibida anteriormente;
- busca os pensamentos na API;
- mostra uma mensagem quando o banco está vazio;
- percorre os resultados e cria os cartões do mural.

### `adicionarPensamentoNaLista(pensamento)`

Cria os elementos HTML de cada cartão:

- item da lista;
- ícone de aspas;
- conteúdo;
- autoria;
- botão de edição;
- botão de exclusão.

Depois, adiciona o cartão ao elemento `#lista-pensamentos`.

### `preencherFormulario(pensamentoId)`

Busca o pensamento selecionado e preenche os campos do formulário com seus dados. O campo oculto `pensamento-id` informa que o formulário está no modo de edição.

### `limparFormulario()`

Utiliza `reset()` para limpar os campos e retirar o ID do pensamento que estava sendo editado.

## 📝 Formulário e inicialização

O arquivo `main.js` aguarda o evento `DOMContentLoaded` antes de acessar os elementos da página.

A função `manipularSubmissaoFormulario(event)`:

1. impede o recarregamento padrão com `preventDefault()`;
2. obtém os valores dos campos;
3. verifica se existe um ID;
4. edita quando existe um ID ou cadastra quando ele está vazio;
5. limpa o formulário;
6. atualiza o mural.

## 🧩 Nomenclaturas importantes

| Nome | Significado |
| --- | --- |
| `const` | Declara uma referência que não será reatribuída. |
| `async` | Define uma função assíncrona. |
| `await` | Aguarda a conclusão de uma Promise. |
| `id` | Identificador único de cada pensamento. |
| `response` | Resposta recebida da API. |
| `response.data` | Dados retornados automaticamente pelo Axios. |
| `event` | Objeto com informações sobre um evento do navegador. |
| `createElement()` | Cria um elemento HTML pelo JavaScript. |
| `appendChild()` | Insere um elemento dentro de outro. |
| `textContent` | Define um conteúdo textual com segurança. |
| `classList.add()` | Adiciona uma classe CSS ao elemento. |
| `import` | Importa funções ou objetos de outro módulo. |
| `export default` | Disponibiliza o conteúdo principal de um módulo. |

## 🔄 Fluxo da aplicação

```text
Formulário → main.js → api.js → JSON Server
                         ↓
                      ui.js
                         ↓
                 Mural atualizado
```

O JSON Server simula um backend durante os estudos. Os dados são armazenados no arquivo `backend/db.json`.
