//acoes de interacao com a pagina

//chamando os elementos criados no objeto (como se fosse uma importacao)
const el = require('./elements').ELEMENTS;

class FazerCheckout {

    validarProdutosNoCarrinho() {

        //primeiro produto

        //verificando se o título está visível para o usuário
        cy.get(el.tituloPrimeiroProduto)
          .should('be.visible')

        //verificando se o valor está visível para o usuário
        cy.get(el.valorPrimeiroProduto)
          .should('be.visible')


        //segundo produto

        //verificando se o título está visível para o usuário
        cy.get(el.tituloSegundoProduto)
          .should('be.visible')

        //verificando se o valor está visível para o usuário
        cy.get(el.valorSegundoProduto)
          .should('be.visible')
    }

    clicarEmCheckout() {
        //botão de checkout
        cy.get(el.checkoutButton) //clicando no botão de checkout
          .should('be.visible')
          .click()
    }
}

//exportacao para diponibilizar a classe para outros arquivos
export default new FazerCheckout(); 