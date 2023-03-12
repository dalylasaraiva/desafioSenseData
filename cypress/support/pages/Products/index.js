//acoes de interacao com a pagina

//chamando os elementos criados no objeto (como se fosse uma importacao)
const el = require('./elements').ELEMENTS;

class EscolhaDeProdutos{
    adicionarDoisProdutosAoCarrinho(){
        //clicando no primeiro item
        cy.get(el.primeiroItem) 
          .should('be.visible')
          .click()

        //clicando no segundo item
        cy.get(el.segundoItem) 
          .should('be.visible')
          .click()
    }

    clicarNoCarrinho(){
        cy.get(el.iconeCarrinho) //clicando no ícone do carrinho
          .should('be.visible')
          .click()
    }
}

//exportacao para diponibilizar a classe para outros arquivos
export default new EscolhaDeProdutos(); 