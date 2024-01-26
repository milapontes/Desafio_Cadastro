
When('insiro os dados do usuário no portal', () => {
       cy.realizarLogin()
})

Then('valido acesso ao Home', () => {
    cy.validarAcesso()
})


// Login Senha Incorreta


When('insiro a senha incorreta do usuário no portal', () => {
     cy.senhaIncorreta()
   
})

Then('valido acesso negado a Home', () => {
    cy.validarAcessoNegado()
})

