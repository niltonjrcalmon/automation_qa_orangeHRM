import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import EmployeeRegistrationPage from '../pages/employeeRegistrationPage';
import { funcionario } from '../fixtures/funcionario';
const employeeRegistrationPage = new EmployeeRegistrationPage


When(/^acesso pagina de cadastro de funcionário$/, () => {
        employeeRegistrationPage.clickPIM()
        employeeRegistrationPage.clickButtonAdd()
});

And(/^preencho os campos de cadastro$/, () => {
        employeeRegistrationPage.cadastroDeFuncionario(funcionario.firstName, funcionario.middleName, funcionario.lastName)

});

Then(/^cadastro de funcionário realizado com sucesso$/, () => {
        employeeRegistrationPage.validateSucessoCadastro()
});

//Background para ser utilizado em pesquisa de funcionário 
Given(/^cadastro é realizado com sucesso$/, () => {
        employeeRegistrationPage.clickPIM()
        employeeRegistrationPage.clickButtonAdd()
        employeeRegistrationPage.cadastroDeFuncionario(funcionario.firstName, funcionario.middleName, funcionario.lastName)
        employeeRegistrationPage.validateSucessoCadastro()
});

//Scenário negativo para preenchimento de campos obrigatórios
When(/^acesso pagina de cadastro de funcionário$/, () => {
        employeeRegistrationPage.clickPIM()
        employeeRegistrationPage.clickButtonAdd()
});

And(/^preencher o formulário, os seguintes campos "([^"]*)", "([^"]*)" e "([^"]*)"$/, (firstName, middleName, lastName) => {
        employeeRegistrationPage.cadastroDeFuncionario(firstName, middleName, lastName)

});

Then(/^clicar em salvar, realizar alerta de mensagem de campos obrigatórios$/, () => {
        employeeRegistrationPage.validateCamposObrigatorios();
});