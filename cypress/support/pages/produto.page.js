const LBL_PRODUTO = 'h1'
const LBL_PRECO_PRODUTO = '.our_price_display'



Cypress.Commands.add('validarProduto', () => {
    let vlProduto
    const produto = Cypress.env('produto')
    if (produto == 'Blouse') vlProduto = '$27'
    if (produto == 'Printed Summer Dress') vlProduto = '$29'
    if (produto == 'Printed Chiffon Dress') vlProduto = '$16'
    cy.get(LBL_PRODUTO).should('contain', produto)
    cy.get(LBL_PRECO_PRODUTO).should('contain', vlProduto)
})