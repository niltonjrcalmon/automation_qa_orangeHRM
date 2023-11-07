# language: en

Feature: Login no site da OrangeRh

    @Positivo @smokeTest
    Scenario: Login com sucesso
        Given acesso a pagina de login
        When realizo o login com dados válidos
        Then login é realizado com sucesso

    @Negativo 
    Scenario Outline: Login sem sucesso: <testDescription>
        Given acesso a pagina de login
        When realizo login com "<login>" e "<senha>"
        Then alerta de dados incorretos é exibido
        Examples:
            | testDescription | login | senha    |
            | Senha incorreta | Admin | 123      |
            | Login incorreto | 123   | admin123 |
        