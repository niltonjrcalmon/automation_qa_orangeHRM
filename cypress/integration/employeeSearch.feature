#language: en

Feature: Pesquisa de funcionário cadastrado no site OrangeRh
    Background: realizar login
         Given login e realizado com sucesso
         Given cadastro é realizado com sucesso


    @Positivo @smokeTest
    Scenario: Validar listagem de funcionário cadastrado
        When acesso o MENU PIM de funcionário  
        And preencho o campo para realizar pesquisa de funcionário
        Then funcionário listado com sucesso
