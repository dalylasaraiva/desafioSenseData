//acoes de interacao com a pagina

//chamando os elementos criados no objeto (como se fosse uma importacao)
const el = require('./elements').ELEMENTS;

class Login{
    acessarTelaLogin(){
        cy.visit('https://www.saucedemo.com/');
    }

    fazerLogin(){ 
        //preenchendo o campo de login
        cy.get(el.userName) 
          .type('standard_user');

        //preenchendo o campo de senha
        cy.get(el.password) 
          .type('secret_sauce');

        //clicando no botão de login
        cy.get(el.loginButton) 
          .click()
    }

    validarLogin(){
      //verificação de que o login foi feito com sucesso através do reconhecimento de um ícone que só é visível depois de logar
        cy.get('.shopping_cart_link') 
          .should('be.visible')
    }
}

//exportacao para diponibilizar a classe para outros arquivos
export default new Login(); 