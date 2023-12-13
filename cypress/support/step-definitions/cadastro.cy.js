
When('realizo cadastro no portal', () => {
    cy.acessarLogin()
    cy.inserirEmail()
    cy.preencherCampos()
})


Then('valido cadastrado foi realizado', () => {
    cy.validarCadastro()
})