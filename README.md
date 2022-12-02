# Smith - Back-End Project

Projeto de uma API RESTful utilizando a arquitetura *Model-Service-Controller* e *TypeScript*.

Aplicação em Node.js de um sistema de uma loja de itens medievais em que será possível criar, visualizar, deletar e atualizar produtos, usuários e pedidos. Banco de dados MySQL foi utilizado para a gestão de dados.

Projeto 24 da [Trybe](https://wwww.betrybe.com), módulo de Back-End.

## O Projeto

#### 1. Criação de Rotas GET:
   - Listar produtos: endpoints GET `/products`.
   - Listar pedidos: endpoints GET `/orders`.

#### 2. Criação de Rotas POST:

- Cadastrar produtos: endpoint POST `/products`, com validações.
    - Cadastrar usuários: endpoint POST `/users`, com validações.
    - Login de usuários: endpoint POST `/login`, com Json Web Token.

## Instalação 

#### 1- Clonar o repositório

```git clone git@github.com:sallybdiament/Project-24-Smith.git```

#### 2 - Subir os containers `blogs_api` e `blogs_api_db` utilizando o docker-compose

Na raíz do projeto: ```docker-compose up -d```

#### 3 - Abrir o terminal do container `blogs_api`

```docker exec -it trybesmith bash```

#### 4 - Instalar as dependências

No terminal do container: ```npm install```

#### 5 - Criar e popular o banco de dados executando o script SQL:

Conectar ao servidor MySQL rodando na porta 3306 usando um cliente MySQL com as credenciais:
host: db
user: root
password: password
No cliente, rodar o script que está no arquivo Trybesmith.sql.
#### 6 - Iniciar a aplicação Node com Nodemon:

```npm run dev```

#### \*Foi utilizado o Thunder Client como cliente de requisições HTTP e o MySQLWorkbench como cliente MySQL\*

## Tecnologias
- TypeScript
- Node.js
- Express.js
- Json Web Token
- DotEnv
- Joi
- Docker
- MySQL
