import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import EmployeeSearchPage from "../pages/employeeSearchPage";
const employeeSearchPage = new EmployeeSearchPage

When(/^acesso o MENU PIM de funcionário$/, () => {

    employeeSearchPage.clickMenuPIM()
});

And(/^preencho o campo para realizar pesquisa de funcionário$/, () => {
    employeeSearchPage.pesquisarFuncionario()

});

Then(/^funcionário listado com sucesso$/, () => {
    employeeSearchPage.validandoDadosFuncionario()
});