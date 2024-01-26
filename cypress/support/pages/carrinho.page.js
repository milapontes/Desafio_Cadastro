const MENU_WOMEN = '.sf-menu > :nth-child(1)'
const BTN_VESTIDO = ':nth-child(2) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x'
const BTN_ADC_CARRINHO = '#add_to_cart'
const IFRAME = '.fancybox-iframe'
const PRODUTO_ADICIONADO = '.layer_cart_product > h2'

Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    return cy
      .get(iframeSelector)
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
   });

   
Cypress.Commands.add('clicarMenu', () => {
 cy.get(MENU_WOMEN).click().should('be.visible');
});


Cypress.Commands.add('adicionarProduto', () => {
 cy.clicarMenu(); // Chama o comando clicarMenu para abrir o menu Women
 cy.get(BTN_VESTIDO).click();
 cy.wait(4000);
 cy.getIframeBody(IFRAME)
   .find(BTN_ADC_CARRINHO)
   .click();
 
});

Cypress.Commands.add('validarProdutoAdicionado',() => {
     cy.wait(5000)
     cy.screenshot('Produto Adicionado')
     cy.get(PRODUTO_ADICIONADO).should('be.visible')
     cy.get('.layer_cart_product').contains('Product successfully added to your shopping cart')
      
})