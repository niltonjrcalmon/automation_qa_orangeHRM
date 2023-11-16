import EmployeeRegistrationElements from "../elements/employeeRegistrationElements";
const employeeRegistrationElements = new EmployeeRegistrationElements

class EmployeeRegistrationPage{
    clickPIM() {
        cy.get(employeeRegistrationElements.buttonMenuPIM()).contains('PIM').click()
    }

    clickButtonAdd(){
        cy.get(employeeRegistrationElements.buttonADD()).contains('Add').click()
    }

    cadastroDeFuncionario(firstName, middleName, lastName){

        cy.get(employeeRegistrationElements.imageFile()).selectFile('cypress/fixtures/itachi.png', {force: true,});
            

        if (firstName === "") {
            cy.get(employeeRegistrationElements.inputFirstName()).clear();
        } else {
            cy.get(employeeRegistrationElements.inputFirstName()).type(firstName);
        }

        if (middleName === "") {
            cy.get(employeeRegistrationElements.inputMiddleName()).clear();
        } else {
            cy.get(employeeRegistrationElements.inputMiddleName()).type(middleName);
        }

        if (lastName === "") {
            cy.get(employeeRegistrationElements.inputLastName()).clear();
        } else {
            cy.get(employeeRegistrationElements.inputLastName()).type(lastName);
        }

        cy.get(employeeRegistrationElements.buttonSubmitSave()).click()

        cy.get(employeeRegistrationElements.idExists())
        .if("contain", "Employee Id already exists")
        .get(employeeRegistrationElements.idImput())
        .clear()
        .type(Math.floor(Math.random() * 10000))
        .then(() => {
          cy.get(employeeRegistrationElements.buttonSubmitSave()).click();
        });


    }

    validateSucessoCadastro(){
        cy.get(employeeRegistrationElements.validateSucessRegister()).as('sucessoCadastro').should('exist');
        cy.url().should("include", "pim/viewPersonalDetails/empNumber/");
    }

    validateCamposObrigatorios(){
        cy.get(employeeRegistrationElements.errorFieldRequired()).each(($elements) => {
            cy.wrap($elements).should("be.visible").and("have.text", "Required");
          });
    }
}

export default EmployeeRegistrationPage