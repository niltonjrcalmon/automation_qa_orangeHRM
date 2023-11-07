#language: en

Feature: Cadastro de funcionário no site OrangeRh
    Background: realizar login
         Given login e realizado com sucesso

    @Positivo @smokeTest
    Scenario: Cadastro realizado com sucesso
        When acesso pagina de cadastro de funcionário
        And preencho os campos de cadastro 
        Then cadastro de funcionário realizado com sucesso

    @Negativo
    Scenario Outline: Cadastro sem sucesso: <testDescription>
        When acesso pagina de cadastro de funcionário
        And preencher o formulário, os seguintes campos "<firstName>", "<middleName>" e "<lastName>"
        Then clicar em salvar, realizar alerta de mensagem de campos obrigatórios
        Examples:
            | testDescription                  | firstName |  middleName | lastName |
            | campos vazios                    |           |             |          |
            | não preenchimento do First Name  |           |  Calazans   |   Rios   |
            | não preenchimento do Last Name   |  Richard  |  Calazans   |          |