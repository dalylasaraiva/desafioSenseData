//acoes de interacao com a pagina

//chamando os elementos criados no objeto (como se fosse uma importacao)
const el = require('./elements').ELEMENTS;

class FinalizarCompra {

    clicarEmFinish() {
        //clicando em finish
        cy.get(el.finishButton)
          .should('be.visible')
          .click()
    }

    validacaoDeCompraEfetuada() {
        //verificar se a compra foi efetuada com sucesso
        cy.get('.complete-header')
          .contains('Thank you for your order!')
    }
}

export default new FinalizarCompra();
