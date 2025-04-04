## Temas Abordados neste Projeto Cypress

* Testes E2E
* Testes de API com ServeRest Localhost
* Testes com WireMock API
* Autenticação Clound
* GitHub Actions + Cron
* Page Objects
* Commands
* MongoDB Clound Cypress

## Primeios passos após o clone do Projeto

* Realizar o clone do projeto na sua máquina e colocar o mesmo dentro de uma pasta chamada **projetos**
* Abrir o projeto no **Visual Studio Code** ou algum editdor de sua preferência
* No terminal do **Visual Studio Code** rodar o comando: **npx cypress open**
* No terminal rodar o comando: **npm install**

## Configuração para testes de API (localhost)

* Rodar o comando **npx serverest@latest** em um terminal do seu sistema operacional
* Ao rodar na primeira vez este comando o mesmo irá realizar o download dos pacotes necessários e após isso o mesmo irá rodar o servidor local
* A API irá rodar na porta **http://localhost:3000/**

## Instalação das Tecnologias

* **Observações**: Se você já tiver o arquivo **package.json** o mesmo pode ser implementado as instruções em **devDependencies**
* **Observações**: Se você não tiver o arquivo **package.json** crie o com o comando: **npm init -y** e depois **npm install**

* Rodar o comando no terminal: **npm install cypress --save-dev** para instalar o Cypress
* Rodar o comando no terminal: **npm install cypress-plugin-api --save-dev** para instalar o PluginAPI
* Rodar o comando no terminal: **npm install cypress-multi-reporters --save-dev** para instalar o Reporters
* Rodar o comando no terminal: **npm install @faker-js/faker --save-dev** para instalar o FakerJS
* Rodar o comando no terminal: **npm install cypress-mongodb --save-dev** para instalar o o MongoDB

## Configuração para Projetos que não possui o Cypress ou Projetos do Zero

* **Observações**: Lembrando que é necessário ter a dependência do Cypress instalada

* Rodar o comando **npx cypress open** dentro da pasta do projeto, irá rodar tudo o que precisa e abrir a interface local do Cypress
* Após a interface aberta o mesmo irá dar as opções de configurar o Cypress e em seguida irá dar a opção de criar templates ou você mesmo criar os testes, neste caso optaremos por criar os arquivos

## Documentações de Referências

* **ServeRest** - https://serverest.dev/
* **Cypress** - https://www.cypress.io/
* **Site de Testes** - https://www.saucedemo.com/
* **FakerJS** - https://fakerjs.dev/
* **GitHub Actions** - https://docs.github.com/pt/actions
* **MongoDB Clound Cypress** - https://www.npmjs.com/package/cypress-mongodb
* **Cron Guru** - https://crontab.guru/

## Rodando os Testes localmente

* Rodar o teste somente de um arquivo: **npx cypress run --spec "cypress/e2e/pasta/nome-do-arquivo.cy.js"**
* Rodar todos os testes: **npx cypress run**
* Abrir a interface local para rodar os testes: **npx cypress open**
* Rodar os testes ao comitar para o GitHub, deve estar configurado o arquivo **main.yml**
* Rodar o comando: **node app.js** para rodar a API com a conexão com o **MongoDB Clound**

## Desafios e Estudos 

* Cypress Mock e Intercepts
* Encadeamento de comandos JavaScript

## Rodando os Testes na Nuvem

* **Observações**: No arquivo **cypress.config.js** será necessário definir em **projectId** o ID do seu projeto Cloud Cpyress
* **Observações**: No windows talvez seja necessário rodar o comando completo com as informações: **npx cypress run --browser chrome --record --key CYPRESS_RECORD_KEY**

* Rode o comando no seu terminal: **npm run cypress-dashboard-run-cloud**