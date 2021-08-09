
## 💻 Sobre o projeto
Criar uma aplicação fullstack, utilizando Relay.JS no Frontend e GraphQL no Backend 

## 📖 O que eu aprendi 
  - Como o Relay funciona, quais os principais conceitos, sendo eles connections, para que possa obter-se edges e nodes, paginnations, que serve para mostrar  o proximo conteúdo existente na aplicação, updater, para atualizar o node e mostrar alguma atualização que o cliente tenha feito e utilizar o relayDevTools.

  - Como o GraphQL funciona, como criar uma query e uma mutation, como fazer para que a aplicação tenha as connections e como os resolvers funcionam, para serem consumidas no Front utilizando Relay, utilizar code first ao invés de schema first e também como o playground do GraphQL funciona para criar suas querys e mutations

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta server) 
2. Frontend (pasta client)

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.


#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/guilhermedinardi/entria.git

# Acesse a pasta do projeto no terminal/cmd
$ cd entria/server

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:4000 - acesse http://localhost:4000 
```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/guilhermedinardi/entria.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd entria/client/crud

# Instale as dependências
$ yarn install

# Execute o Relay
$ yarn relay

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

