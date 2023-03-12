//acoes de interacao com a pagina

//chamando os elementos criados no objeto (como se fosse uma importacao)
const el = require('./elements').ELEMENTS;

class InputInformacoes {
    preencherDados() {

        //preenchendo o First Name
        cy.get(el.firstName)
          .should('be.visible')
          .type('Dalyla')

        //preenchendo o Last Name
        cy.get(el.lastName)
          .should('be.visible')
          .type('Cardoso')

        //preenchendo o Zip Code
        cy.get(el.zipCode)
          .should('be.visible')
          .type('60115221')
    }

    clicarEmContinue() {
        //clicando em continue
        cy.get(el.continuButton)
          .should('be.visible')
          .click()
    }

}

//exportacao para diponibilizar a classe para outros arquivos
export default new InputInformacoes();