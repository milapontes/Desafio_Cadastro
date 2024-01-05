Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When('insiro os dados incorreto do usuário no portal', () => {
    cy.acessarLogin()
    cy.loginIncorreto()
   
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