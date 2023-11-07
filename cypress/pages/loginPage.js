import LoginElements from "../elements/loginElements";
const loginElements = new LoginElements

class LoginPage {
    verificarImageLogin() {
        cy.get(loginElements.imageLogin()).should('be.visible').as('imagemPresente')
    }

    loginSubmit(username, password){

        if (username === "") {
            cy.get(loginElements.inputName()).clear();
        } else {
            cy.get(loginElements.inputName()).type(username);
        }

        if (password === "") {
            cy.get(loginElements.inputPassword()).clear();
        } else {
            cy.get(loginElements.inputPassword()).type(password);
        }

        cy.get(loginElements.buttonSubmitLogin()).click();
    }

    validateLoginSucessfull(){
        cy.get(loginElements.imageLoginSucessfull()).should('be.visible')
    }

    validateErroLoginAlert(){
        cy.get(loginElements.errorLoginAlert()).should('have.text', 'Invalid credentials').as('erroPresente')
    }
}

export default LoginPage