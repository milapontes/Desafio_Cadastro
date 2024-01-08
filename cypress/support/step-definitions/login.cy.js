Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When('insiro a senha incorreta do usuário no portal', () => {
    cy.acessarLogin()
    cy.senhaIncorreta()
   
})

Then('valido acesso negado a Home', () => {
    cy.validarAcessoNegado()
})

When('insiro os dados do usuário no portal', () => {
    cy.acessarLogin()
    cy.realizarLogin()
})

Then('valido acesso ao Home', () => {
    cy.validarAcesso()
})