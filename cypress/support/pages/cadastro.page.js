//const BTN_ACESSA_LOGIN = '.login'
//const INPUT_EMAIL = '#email_create'
//const BTN_INSERIR_EMAIL = '#SubmitCreate'
const EMAIL = '#email'
const INPUT_FIRSTNAME = '#customer_firstname' 
const INPUT_LASTNAME = '#customer_lastname'
const INPUT_PASSWORD = '#passwd'
const BTN_CHECKBOX = '#id_gender2'
const DAY = '#days'
const MONTH = '#months'
const YEAR = '#years'
const BTN_NEWS = '#newsletter'
const BTN_SUBMIT = '#submitAccount'
const MENSAGEM_SUCESSO_CADASTRO = '.alert'

//Preenchendo formulário de cadastro

Cypress.Commands.add('preencherCampos', () =>{
    cy.get(BTN_CHECKBOX).click()
    cy.get(INPUT_FIRSTNAME).type(Cypress.env('Cadastro_Loja').firstname)
    cy.get(INPUT_LASTNAME).type(Cypress.env('Cadastro_Loja').lastname)
    cy.log('RETORNODOEMAIL',Cypress.env('loginEmail'))
    cy.get(EMAIL).should('have.value', Cypress.env('loginEmail'));
    // cy.get(EMAIL).should('include.text', Cypress.env('loginEmail'));
    //cy.get(EMAIL).should.be('be.contains', Cypress.env('loginEmail'))
    cy.get(INPUT_PASSWORD).type('123456')
    cy.get(DAY).select(11)
    cy.get(MONTH).select('May')
    cy.get(YEAR).select('1991')
    cy.get(BTN_NEWS).click()
    cy.get(BTN_SUBMIT).should('be.visible')
    cy.get(BTN_SUBMIT).click()
  
     
  })

//Validando que o cadastro foi realizado com sucesso

  Cypress.Commands.add('validarCadastro', () =>{
    cy.get(MENSAGEM_SUCESSO_CADASTRO).should('be.visible')
    cy.get(MENSAGEM_SUCESSO_CADASTRO).should('contain', 'Your account has been created.')
    cy.screenshot('usuário cadastrado validado')

    })
    

