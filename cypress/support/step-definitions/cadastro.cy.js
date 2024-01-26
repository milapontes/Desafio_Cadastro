Given('que acesso o portal My Shop', () => {
    cy.visit('/')
    cy.acessarPaginaLogin()
})

When('realizo o cadastro', () => {
    cy.inserirEmail()
    cy.preencherCampos()
})

Then('valido que o cadastro foi realizado', () => {
    cy.validarCadastro()
})

// Usuário já cadastrado

When('preencho e-mail já cadastrado no portal', () => {
    cy.preencherUsuarioCadastrado()
})

Then('valido que o usuário já está cadastrado', () => {
    cy.validarMensagemErroUsuarioJaCadastrado()
})