And('acesso a categoria Women', () => {
    cy.acessarWomen()
})

And('valido a quantidade de produtos na pagina', () => {
    cy.validarQtdProdutos()
})

//declarando variável global 

And('acesso o produto {string}', produto => {
    Cypress.env('produto', produto)
    cy.clicarProduto(produto)
})

Then('realizo as validações do produto', () => {
    cy.validarProduto()
})
