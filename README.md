# Desafio SenseData

O desafio proposto solicitou criar um mini-projeto de automação para fazer a compra de dois produtos em uma loja online, para isso eu deveria entrar no"e-commerce" https://www.saucedemo.com realizar o login, fazer a compra de dois itens e finalizá-la.

# Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [Node.js](https://nodejs.org/en/)
- npm (é necessário porém é instalado junto com o Node na versão para Windows)
- Git
- Visual Studio Code

## Instalação do [Cypress](https://cypress.io)

1. Crie uma pasta para instalar o cypress
2. Na raiz da sua pasta, usando o terminal do Visual Studio Code execute o comando `npm install cypress@9.5.1 --save-dev` (o projeto foi feito nesta versão)

## Como executar o teste:
1. Clone o projeto "git clone https://github.com/dalylasaraiva/desafioSenseData.git"
2. Abra a pasta do projeto que estava no repositório que foi baixado do github.
3. O desafio está na pasta cypress, subpasta integration.
4. Execute o cypress com o comando `npx cypress open`
5. Clique em "Comprar_produtos.spec.js" após a janela de execução do cypress ser aberta
6. Aguarde o teste finalizar

