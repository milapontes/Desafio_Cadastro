
When('realizo cadastro no portal', () => {
    cy.acessarLogin()
    cy.inserirEmail()
    cy.preencherCampos()
})


Then('valido cadastrado foi realizado', () => {
    cy.validarCadastro()
})

When('preencho e-mail já cadastrado no portal', () =>{
    cy.acessarLogin()
    cy.preencherUsuarioCadastrado()
})

Then('valido que o usuário já está cadastrado', () =>{
    cy.validarEmailCadastrado()
})