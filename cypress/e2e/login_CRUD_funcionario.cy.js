//Importando variavéis que irão representar "Primeiro nome", "Nome do meio" e "sobrenome" no cadastro de funcionário e na pesquisa de funcionário.
import { funcionario } from "../fixtures/funcionario";
  
  beforeEach(() => {
    cy.visit("/");
    cy.login('Admin', 'admin123');
  })

  describe('Criação de cadastro - novo funcionário', () => {
    it('Acessar o menu “PIM” e realizar o cadastro simples com foto, validando na tela seguinte se os dados foram cadastrados com sucesso.', () => {
      //Clicando no botão PIM
      cy.get('span').contains('PIM').should('be.visible').click();
      //Clicando no botão Adicionar
      cy.get('button').contains('Add').should('be.visible').click();
      //Upload da imagem do perfil de cadastro
      cy.get('input[type="file"]').selectFile('cypress/fixtures/itachi.png', {force: true,});
      //Preenchendo dados
      cy.cadastrarFuncionario(funcionario.firstName, funcionario.middleName, funcionario.lastName)
      //Clicando no botão para salvar os dados preenchidos
      cy.get('button').contains('Save').should('be.visible').click();
      
      //Verificando se o Employee Id já existe
      cy.get(".oxd-input-field-error-message")
        .if("contain", "Employee Id already exists")
        .get(".oxd-input.oxd-input--active.oxd-input--error")
        .clear()
        .type(Math.floor(Math.random() * 10000))
        .then(() => {
          cy.get("button[type='submit']").click();
        });
      
      //Validando mensagem dos dados que foram cadastrados com sucesso
      cy.get('div.oxd-toast-content--success').as('sucessoCadastro').should('exist');

      //Verificando se a página está de acordo com o esperado após ação do cadastro no página.
      cy.url().should("include", "pim/viewPersonalDetails/empNumber/");


      })
  })

  describe('Visualização de detalhes do cadastro de Funcionário', () => { 
    let nameAndmiddleName = funcionario.firstName + " " + funcionario.middleName;
    it('Pesquisar pelo nome que foi criado e visualizar o detalhamento do cadastro, validando se os dados estão corretos.', () => {
      //Entrando no Menu PIM 
      cy.get('span').contains('PIM').should('be.visible').click();
      //Consultando o funcionário no campo de busca
      cy.get('input[placeholder="Type for hints..."]').eq(0).should('be.visible').type(nameAndmiddleName) 
      cy.get('button[type="submit"]').contains('Search').click()
      //Selecionando o funcionário encontrado e visualizando o detalhamento do cadastro
      cy.get('div[class="oxd-table-cell oxd-padding-cell"]').eq(0).click()
      cy.get('div.oxd-table-body').as('resultadoDaPesquisa')
        .children().should('have.length', 1);
      cy.get('@resultadoDaPesquisa').find('button').last().click();

      cy.url().should("include", "pim/viewPersonalDetails/empNumber/");

      //Validando se os dados de cadastro estão corretos
      cy.get('input[placeholder="First Name"]').should('have.value', funcionario.firstName);
      cy.get('input[placeholder="Middle Name"]').should('have.value', funcionario.middleName);
      cy.get('input[placeholder="Last Name"]').should('have.value', funcionario.lastName);
    })
})
