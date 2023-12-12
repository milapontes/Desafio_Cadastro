Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

When('realizo cadastro no portal', () => {
    cy.acessarLogin()
    cy.inserirEmail()
    cy.preencherCampos()
})

Then('valido cadastrado foi realizado', () => {
    cy.validarCadastro()
})


