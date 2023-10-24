
  
    //Adicionando login e senha para entrar no site da Orange HRM
    Cypress.Commands.add('login', (username, password) => { 
    cy.session(username, () => {
        cy.visit("/");
        cy.get('input[name="username"]').should('be.visible').type(username, {log: false})
        cy.get('input[name="password"]').should('be.visible').type(password, {log: false})  
        cy.get('button[type="submit"]').click()
    })
    cy.visit("/");
})

    // Adicionando dados no cadastro do funcionário e depois salvar no banco de dados da empresa
    Cypress.Commands.add('cadastrarFuncionario', (firstName, middleName, lastName) => {
        //Upload da imagem do perfil de cadastro
        cy.get('input[type="file"]').selectFile('cypress/fixtures/itachi.png', {force: true,});
        //Adicionando primeiro nome, nome do meio e sobrenome
        cy.get('input[name="firstName"]').should('be.visible').type(firstName)
        cy.get('input[name="middleName"]').should('be.visible').type(middleName)
        cy.get('input[name="lastName"]').should('be.visible').type(lastName)        

    })