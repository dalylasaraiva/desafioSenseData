/// <reference types="Cypress" />

import Login from '../support/pages/Login';
import Products from '../support/pages/Products';
import YourCart from '../support/pages/YourCart';
import YourInformation from '../support/pages/YourInformation';
import Overview from '../support/pages/Overview';

describe('Compras saucedemo', function() {
    it('Comprar dois produtos', function() {
       
      Login.acessarTelaLogin();
      Login.fazerLogin();
      Login.validarLogin();
      Products.adicionarDoisProdutosAoCarrinho();
      Products.clicarNoCarrinho();
      YourCart.validarProdutosNoCarrinho();
      YourCart.clicarEmCheckout();
      YourInformation.preencherDados();
      YourInformation.clicarEmContinue();
      Overview.clicarEmFinish();
      Overview.validacaoDeCompraEfetuada();
    })
})