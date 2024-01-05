When('realizo o login e adiciono produto no carrinho', () => {
    cy.acessarLogin()
    cy.realizarLogin()
    cy.validarAcesso()
    cy.clicarMenu()
    cy.adicionarProduto()

})
 
Then('valido que o produto foi adicionado', () => {
    
})