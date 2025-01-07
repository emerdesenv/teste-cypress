## Testes Cypress

* Autenticação clound (Opcional)
* API local para testes ServeRest
* Testes de API + Interface

## Primeios passos após o clone do projeto

* Realizar o clone do projeto na sua máquina e colocar o mesmo dentro de uma pasta chamada **projetos**
* Abrir o projeto no **VS Code** ou algum editdor de sua preferência
* Rodar o comando **npx serverest@latest** em um terminal do seu sistema operacional
* No terminal do VS Code rodar o comando: **npx cypress open**

## Instalação das Tecnologias

* Rodar o comando no terminal: **npm install cypress --save-dev** para instalar o Cypress
* Rodar o comando no terminal: **npx serverest@latest** para iniciar o ServerRest

## Preparação do ambiente do Zero

* Rodar o comando **npx cypress open** dentro da pasta do projeto, irá rodar tudo o que precisa e abrir a interface local do Cypress
* Após feito isso o mesmo irá dar as opções de configurar o Cypress e em seguida o mesmo irá dar a opção de criar templates ou você mesmo criar os testes

## Configuração para Projetos que não possui o Cypress

* Rodar o comando **npx cypress open** dentro da pasta do projeto, irá rodar tudo o que precisa e abrir a interface local do Cypress
* Após feito isso o mesmo irá dar as opções de configurar o Cypress e em seguida o mesmo irá dar a opção de criar templates ou você mesmo criar os testes, neste caso optaremos por criar os arquivos

## Documentações de Referências

* **ServeRest** - https://serverest.dev/
* **Cypress** - https://www.cypress.io/
* **Site de Testes** - https://www.saucedemo.com/
* **FakerJS** - https://fakerjs.dev/

## Rodando os Testes localmente

* Rodar o teste somente de um arquivo: **npx cypress run --spec "cypress/e2e/pasta/nome-do-arquivo.cy.js"**
* Rodar todos os testes: **npx cypress run**
* Abrir a interface local para rodar os testes: **npx cypress open**
* Rodar os testes ao comitar para o GitHub, deve estar configurado o arquivo **main.yml**