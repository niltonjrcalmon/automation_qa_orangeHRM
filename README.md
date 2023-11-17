# Cypress OrangeHRM 
 
Projeto com finalidade de automação de testes e2e (front-end) da orangeHRM, utilizando o framework Cypress. Desenvolvido no modelo BDD(Desenvolvimento Orientado a Comportamento) com intuito de escrever testes guiados pelo comportamento do usuário e pelos negócios. Seguindo a estrutura Gherkin, uma linguagem de formatação de texto simples, sendo organizado pelas seguintes condições (Cenário, Dado, Quando, E, Então). E por final, utilizando o Cucumber que é uma ferramenta de software que vai permitir que os cenários de testes inscrito na linguagem Gherkin, sejam executados como testes automatizados.
 
## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
- [Cucumber](https://cucumber.io/docs/installation/ "Cucumber")
- [Node.js](https://nodejs.org/en/download "Node.Js")

## Linguagem aplicada:
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript "JavaScript")
 
## Estrutura de pastas
- [integration/features] => esta pasta contém os arquivos Gherkin que descreve os cenários de testes, sejam eles positivo ou negativo.
- [elements] => contém arquivos ou classes que representam elementos da interface do usuário (UI), como botões, campos de entrada, etc. 
- [pages] => organiza o código relacionado a cada página da web, as classes nesta pasta irá conter métodos para interagir com a página, além de chamar métodos dos elementos (definidos em elements/) para realizar ações.
-[steps] => conecta os cenários Gherkin aos métodos de implementação, permitindo que execução dos cenários seja automatizada. Cada método corresponde a um passo Gherkin.
 
## Tutorial, Instalação e execução
 
### Executar este projeto em sua maquina
 
* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:
 
**Instalar as dependências:**  
```
npm install: instalar as dependências do projeto
```
 
### Tutorial para iniciar um novo projeto utilizando está estrutura
 
* Dentro da pasta especifica para o projeto:
```
npm init -y:  é usado para inicializar um novo projeto Node.js e criar um arquivo package.json com valores padrão 
```
 
* Instalar a última versão do cypress:
```
npm install --save-dev cypress
```
* Somente para o report:  
```
npm install --save-dev mochawesome
npm install cypress-multi-reporters --save-dev
```
* Somente para o cucumber: 
```
npm install --save-dev cypress-cucumber-preprocessor: permite que você escreva seus testes usando a sintaxe Gherkin do Cucumber.
npm install --save-dev multiple-cucumber-html-reporter: para gerar relatórios HTML a partir dos resultados dos testes Cucumber.

```

### Trick
 
* Execução de testes no `NPM SCRIPTS`:
```
npm run cy:open  => abrir o Cypress
npm run cy:run   => executar os testes e gerar relatório 
npm run report:merge  => gerar relatórios de testes
npm run report:generate  => gerar relatórios de testes
```
 
## Acesso ao projeto e/ou relatório 
Configurado no workflow do GitHub para gerar os relatórios de testes e acessa-lo no GitHub Pages. Abaixo está a URL de acesso:

https://niltonjrcalmon.github.io/automation_qa_orangeHRM/