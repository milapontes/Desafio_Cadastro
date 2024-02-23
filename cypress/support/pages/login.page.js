const INPUT_EMAIL = '#email_create'
const BTN_INSERIR_EMAIL = '#SubmitCreate'
const INPUT_LOGIN = '#email'
const INPUT_SENHA = '#passwd'
const BTN_SIGNIN = '#SubmitLogin'
const MSG_ALERTA = '#center_column > :nth-child(2)'

const MSG_USUARIOCADASTRADO = '#create_account_error'

//      LOGIN
// Realizando Login

Cypress.Commands.add('realizarLogin', () => {
    cy.get(INPUT_LOGIN).type('treinamento_cypress@teste.com')
    cy.get(INPUT_SENHA).type('!QAZ2wsx')
    cy.get(BTN_SIGNIN).click()
})


// Cenário negativo de Login: Passando uma senha Incorreta    

Cypress.Commands.add('senhaIncorreta', () => {
    cy.get(INPUT_LOGIN).type('treinamento_cypress@teste.com')
    cy.get(INPUT_SENHA).type('1234')
    cy.get(BTN_SIGNIN).should('be.visible')
    cy.get(BTN_SIGNIN).click()
})

//Validando retorno de mensagem de senha incorreta

Cypress.Commands.add('validarAcessoNegado', () => {
    cy.get(MSG_ALERTA).should('be.visible')
    cy.get(MSG_ALERTA).should('contain', 'Invalid password.')
    cy.screenshot('Acesso Negado validado')

})

//      CADASTRO
//Realizando cadastro de uma nova conta
// Utilizando FAKEbr para criar login randômico no cadastro e não retornar usuário ja cadastrado

Cypress.Commands.add('inserirEmail', () => {

    cy.get(BTN_INSERIR_EMAIL).should('be.visible')

    var faker = require('faker-br')
    let nome = faker.name.firstName()
    let loginEmail = nome + '321@teste.com.br'
    Cypress.env('loginEmail', loginEmail)
    cy.get(INPUT_EMAIL).type(loginEmail)
    cy.get(BTN_INSERIR_EMAIL).click()


})

//Cenário Inserir email de usuário já cadastrado

Cypress.Commands.add('preencherUsuarioCadastrado', () => {
    cy.get(INPUT_EMAIL).type('treinamento_cypress@teste.com')
    cy.get(BTN_INSERIR_EMAIL).click()

})

//Validação retorno de mensagem de usuário já cadastrado
Cypress.Commands.add('validarMensagemErroUsuarioJaCadastrado', () => {
    cy.get(MSG_USUARIOCADASTRADO).should('be.visible')
    cy.get(MSG_USUARIOCADASTRADO).should('contain', 'An account using this email address has already been registered')
    cy.screenshot('usuário não cadastrado validado')

})

