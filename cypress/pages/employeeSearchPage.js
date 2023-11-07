import EmployeeSearchElements from "../elements/employeeSearchElements";
import { funcionario } from "../fixtures/funcionario";
const employeeSearchElements = new EmployeeSearchElements


class EmployeeSearchPage {

    clickMenuPIM(){
        cy.get(employeeSearchElements.buttonMenuPim()).contains('PIM').should('be.visible').click();    
        cy.get(employeeSearchElements.validateTitlePim()).contains('PIM').should('exist')
    }

    pesquisarFuncionario(){
        let nameAndlastName = funcionario.firstName + " " + funcionario.lastName;
        cy.get(employeeSearchElements.inputEmployeeName()).eq(0).should('be.visible').type(nameAndlastName)
        cy.get(employeeSearchElements.buttonSearch()).contains('Search').click()

        
        cy.url().should("include", "pim/viewEmployeeList");
        //Selecionando o 1° checkbox que aparece
        cy.get('div[class="oxd-table-cell oxd-padding-cell"]').eq(0).click()
        //Verificando se a tabela existe somente 1 filho, caso tenha, vai localizar esse elemento e clicar no botão editar
        cy.get('div.oxd-table-body').as('resultadoDaPesquisa')
          .children().should('have.length', 1);
        cy.get('@resultadoDaPesquisa').find('button').last().click();   

    }

    validandoDadosFuncionario(){
        cy.get(employeeSearchElements.validateFirstName()).should('have.value', funcionario.firstName);
        cy.get(employeeSearchElements.validateMiddleName()).should('have.value', funcionario.middleName);
        cy.get(employeeSearchElements.validateLastName()).should('have.value', funcionario.lastName);
    }
}


export default EmployeeSearchPage