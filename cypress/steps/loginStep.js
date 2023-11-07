import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "../pages/loginPage";
const loginPage = new LoginPage

let userName = 'Admin'
let password = 'admin123'

Given(/^acesso a pagina de login$/, () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.verificarImageLogin()
});

When(/^realizo o login com dados válidos$/, () => {
    loginPage.loginSubmit(userName, password)
});

Then(/^login é realizado com sucesso$/, () => {
    loginPage.validateLoginSucessfull()
});

//Background para ser utilizado em cadastro e pesquisa de funcionário
Given(/^login e realizado com sucesso$/, () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.verificarImageLogin()
    loginPage.loginSubmit(userName,password)
    loginPage.validateLoginSucessfull()
});

//Cenário negativo (login e/ou senha incorreta)
When(/^realizo login com "([^"]*)" e "([^"]*)"$/, (userName,password) => {
	loginPage.loginSubmit(userName,password)
});

Then(/^alerta de dados incorretos é exibido$/, () => {
	loginPage.validateErroLoginAlert()
});

