const BTN_ACESSA_LOGIN = '.login'
const MSG_LOGIN = '.account'
const MENU_WOMEN = '.sf-menu > :nth-child(1)'

//Clicando para abrir a tela de Login e Cadastro

Cypress.Commands.add('acessarPaginaLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).should('be.visible')
 //   cy.screenshot('Botão Login validado')
    cy.get(BTN_ACESSA_LOGIN).click()
})

// Validando que login foi feito com sucesso
Cypress.Commands.add('validarAcesso', () => {
    cy.get(MSG_LOGIN).should('be.visible')
    cy.screenshot('Acesso validado')
})


// Clicar no menu WOMEN 
Cypress.Commands.add('acessarWomen', () => {
    cy.get(MENU_WOMEN).should('be.visible')
    cy.get(MENU_WOMEN).click()
    //cy.screenshot('Acesso validado')
})
