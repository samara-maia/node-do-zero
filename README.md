# node-do-zero

Este é um projeto de exemplo para um CRUD para criação de rotas de videos ultilizando Node.js, Fastify, PostgreSQL e para deploy Render

### Estrutura do Projeto

```
📦 root
 ┣ 📂 database
 ┃ ┣ 📜 database.js
 ┣ 📂 src
 ┃ ┣ 📂 models
 ┃ ┣ 📜 database-memory.js
 ┃ ┣ 📜 database-postgres.js
 ┃ ┗ 📜 db.js
 ┃ ┣ 📂 routes
 ┃ ┗ 📜 routes.http
 ┣ 📜 .env
 ┣ 📜 .gitignore

```

### Funcionalidades

- Usuario criar o video: Adiciona um novo video ao banco de dados.
- Obtem uma lista de videos criados: Retorna uma lista de todos os videos.
- Obtem o videos por ID: Retorna um video específico pelo ID.
- Atualizar os videos por ID: Atualiza as informações de um video específico pelo ID.
- Deletar video por ID: Remove um video específico pelo ID.

### Pré-requisitos

- Node.js
- Neon
- PostgreSQL
- Render

1. Clone o repositório:

```
git clone <URL_DO_REPOSITORIO>
cd NODE.JS
```

2. Instale as dependências:

```
npm install
```

#### Documentação da API

A documentação da API está disponível em http://localhost:3333

#### Testando a Conexão com o Banco de Dados

O arquivo `database-memory.js` contém a configuração do Prostegres para conectar ao banco de dados local. A conexão é testada automaticamente ao iniciar a aplicação.

#### Rotas da API

As rotas da API estão definidas no arquivo `routes.http`:

- POST: Cria um novo video.
- GET: Retorna um video pelo ID.
- PUT:id: Atualiza um video pelo ID.
- DELETE /api/clients/:id: Deleta um video pelo ID.

### Licença

Este projeto está licenciado sob a licença ISC.
