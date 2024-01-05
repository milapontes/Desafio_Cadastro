
#utf-8
#language: pt

@teste
Funcionalidade: Cadastro Loja - Portal
    Cenário: Validacao Cadastro Portal
        Dado que acesso o portal My Shop
        Quando realizo cadastro no portal
        Então valido cadastrado foi realizado

    Cenário: Validacao de Usuário Já Cadastrado
        Dado que acesso o portal My Shop
        Quando preencho e-mail já cadastrado no portal
        Então valido que o usuário já está cadastrado