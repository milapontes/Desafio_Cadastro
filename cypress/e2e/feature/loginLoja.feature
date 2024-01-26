#utf-8
#language: pt
@teste
 Funcionalidade: Login Portal
     Cenário: Validacao Login sucesso no Portal
        Dado que acesso o portal My Shop
        Quando insiro os dados do usuário no portal
        Então valido acesso ao Home

    Cenário: Validacao Senha incorreta no Portal
        Dado que acesso o portal My Shop
        Quando insiro a senha incorreta do usuário no portal
        Então valido acesso negado a Home

