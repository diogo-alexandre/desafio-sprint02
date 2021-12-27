
# Desafio Compasso

Este projeto faz parte do programa de bolsas Compasso OUL como desafio da Sprint #2.

> Status do Projeto: Concluido ✓
-----
### Tecnologias
- [Node.JS](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Mysql2](https://www.npmjs.com/package/mysql2)


## Como Rodar a aplicação

1. #### Comece clonando a aplicação na sua máquina
```
git clone https://github.com/diogo-alexandre/desafio-sprint02.git
cd desafio-sprint02
```

2. #### Instale as dependências
```
npm install
```

3. #### Crie um arquivo .env na raiz do projeto para as credências da conexão com o banco de dados e porta (opcional) para o app.

- Windows
```
echo '' > .env
```
- Linux
```
touch .env
```
- .env Exemplo:
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=12345
DB_DATABASE=desafio

PORT=3000

```
5. #### Finalizado o arquivo .env, só rodar a aplicação
```
npm run start
```

## Rotas da aplicação

- #### Rotas de Projetos
------------------
| método | caminho   | descrição |
|--------|-----------|--------------------------------- |
| GET    | /api/project     | Lista todos projetos |
| GET    | /api/project/:id | Retorna apenas um projeto |
| POST   | /api/project/ | Cria um projeto |
| PUT    | /api/project/:id | Atualiza um projeto |
| DELETE | /api/project/:id | Destroi um projeto |

- #### Rotas de Tarefas

------------------
| método | caminho   | descrição |
|--------|-----------|--------------------------------- |
| GET    | /api/project/:id/task     | Lista todas tarefas de um projeto |
| GET    | /api/project/:id/task/:id | Retorna uma tarefa de um projeto |
| POST   | /api/project/:id/task     | Cria uma tarefa para um projeto |
| PUT    | /api/project/:id/task/:id | Atualiza uma tarefa de um projeto |
| DELETE | /api/project/:id/task/:id | Remove uma tarefa de um projeto |
