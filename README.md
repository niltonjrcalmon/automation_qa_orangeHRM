# Cypress OrangeHRM 
 
Projeto com finalidade de automação de testes e2e (front-end) da orangeHRM, utilizando o framework Cypress. Desenvolvido no modelo BDD (Desenvolvimento Orientado a Comportamento) com intuito de escrever testes guiados pelo comportamento do usuário e pelos negócios. Seguindo a estrutura Gherkin, uma linguagem de formatação de texto simples, sendo organizado pelas seguintes condições (Cenário, Dado, Quando, E, Então). E por final, utilizando o Cucumber que é uma ferramenta de software que vai permitir que os cenários de testes inscrito na linguagem Gherkin, sejam executados como testes automatizados.
 
## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
- [Cucumber](https://cucumber.io/docs/installation/ "Cucumber")
- [Node.js](https://nodejs.org/en/download "Node.Js")

## Linguagem aplicada:
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript "JavaScript")
 
## Estrutura de pastas
**integration/features**: Esta pasta contém os arquivos Gherkin que descrevem os cenários de testes, sejam eles positivos ou negativos.

**elements**: Contém arquivos ou classes que representam elementos da interface do usuário (UI), como botões, campos de entrada, etc.

**pages**: Organiza o código relacionado a cada página da web. As classes nesta pasta irão conter métodos para interagir com a página, além de chamar métodos dos elementos (definidos em `elements/`) para realizar ações.

**steps**: Conecta os cenários Gherkin aos métodos de implementação, permitindo que a execução dos cenários seja automatizada. Cada método corresponde a um passo Gherkin.
 
## Tutorial, Instalação e execução
 
### Executar este projeto em sua maquina

* Clone o repositório 
```
https://github.com/niltonjrcalmon/automation_qa_orangeHRM.git
```
 
* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:
 
**Instalar as dependências:**  
```
npm install
```
 
### Tutorial para iniciar um novo projeto utilizando esta estrutura
 
* Dentro da pasta especifica para o projeto:

**Pacote para inicializar um novo projeto Node.js e criar um arquivo package.json com valores padrão**
```
npm init -y 
```
 
* Instalar a última versão do cypress:
```
npm install --save-dev cypress
```
* Somente para o report do mochawesome:  
```
npm install --save-dev mochawesome
npm install cypress-multi-reporters --save-dev
```
* **Faker:** gerar dados de teste.
-[Faker](https://github.com/faker-js/faker "Faker")

* **cypress-if:** lógica condicional if-else para os testes condicionais.
-[Cypress-if](https://github.com/bahmutov/cypress-if "Cypress-if")

* Somente para o cucumber: 
**Pacote que permite que você escreva seus testes usando a sintaxe Gherkin do Cucumber.**
```
npm install --save-dev cypress-cucumber-preprocessor
```
**Pacote que permite gerar relatórios HTML a partir dos resultados dos testes Cucumber.**
```
npm install --save-dev multiple-cucumber-html-reporter

```

### Trick
 
* Execução de testes no `NPM SCRIPTS`:

**Abrir o Cypress**
```
npm run cy:open
```
**Executar os testes e gerar relatório**
```
npm run cy:run 
```
**Gerar os relatórios de testes**
```
npm run report:merge 
npm run report:generate 
```
 
## Acesso ao projeto e/ou relatório 
Configurado no workflow do GitHub para gerar os relatórios de testes e acessa-lo no GitHub Pages. Abaixo está a URL de acesso:

### https://niltonjrcalmon.github.io/automation_qa_orangeHRM/