/* Armazena o "tabuleiro" do jogo como um array dentro de um objeto. Os jogadores também são armazenados em
objetos. Provavelmente cria um objeto responsável por controlar o fluxo do jogo em si
Objetivo principal => Ter o mínimo de código possível no escopo global. Usar o máximo que eu conseguir dentro das factory functions. 
verifica as combinações vencedoras (3 em linha) e empates */

// Dentro do objeto tabuleiro, armazena uma lista com as linhas e colunas do jogo

// Minhas idéias:
// - cria uma lista dentro de um objeto "tabuleiro" com as posições(0, 1, 2, 3...) pra representar os espaços a serem preenchidos
// - Se uma posição foi escolhida, não poderá ser escolhida de novo (criar algo para fazer esse verificação, talvez alterar o estado do elemento escolhido)
// - Criar as opções pros jogadores escolherem (criar uma função no objeto "jogador" que permite escolher a posição a ser marcada)
// - Usar uma IFEE para controlar todo o jogo. (os objetos e funções estarão dentro da função IFEE)
// - Posso usar módulos para só retornar o que eu precisar e deixar tudo dentro (acho que o módulo que é o objeto que vai controlar todo o fluxo do jogo, armazenar as funções e só mostrar oq for necessário)

// estudar sobre objetos com listas dentro


let tabuleiro = {
    posicoes:[0,1,2,3,4,5,6,7,8] // Lista com as posições do tabuleiro
}
console.log(tabuleiro.posicoes[0])