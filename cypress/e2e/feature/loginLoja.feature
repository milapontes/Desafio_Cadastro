
#utf-8
#language: pt
@teste
 Funcionalidade: login Loja - Login Portal
    Cenário: Validacao Login incorreto no Portal
        Dado que acesso o portal My Shop
        Quando insiro os dados incorreto do usuário no portal
        Então valido acesso negado a Home

    Cenário: Validacao Login sucesso no Portal
        Dado que acesso o portal My Shop
        Quando insiro os dados do usuário no portal
        Então valido acesso ao Home