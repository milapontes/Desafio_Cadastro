const BTN_PRODUTO = '.product-container'

//Valida quantidade de produtos na página
Cypress.Commands.add('validarQtdProdutos', () => {
    cy.get(BTN_PRODUTO).should('have.length', 7)
})

//clica no produto desejado
Cypress.Commands.add('clicarProduto', produto => {
    cy.get(BTN_PRODUTO).contains(produto).click()
})