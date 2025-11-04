/* Armazena o "tabuleiro" do jogo como um array dentro de um objeto. Os jogadores também são armazenados em
objetos. Provavelmente cria um objeto responsável por controlar o fluxo do jogo em si
Objetivo principal => Ter o mínimo de código possível no escopo global. Usar o máximo que eu conseguir dentro das factory functions. 
verifica as combinações vencedoras (3 em linha) e empates */

// Dentro do objeto tabuleiro, armazena uma lista com as linhas e colunas do jogo

// Minhas idéias:


// Criar um objeto para controlar o fluxo do jogo. Ele vai usar a função "marcar" que está na função de fábrica "criarJogador"

// - Se uma posição foi escolhida, não poderá ser escolhida de novo (criar algo para fazer esse verificação, talvez alterar o estado do elemento escolhido)


// O objeto de fluxo de jogo vai armazenar o 


// Usando o module pattern para deixar variáveis e funções privadas, exceto as que forem retornadas
// Retorna apenas as funções e variáveis que devem ser acessíveis externamente
moduloJogoDaVelha = (function() {
    // Tudo dentro do módulo está encapsulado e só pode ser acessado fora dele for retornado no final
    let tabuleiro = {
        posicoes:[0,1,2,3,4,5,6,7,8] // Lista com as posições do tabuleiro
    }


    // Função de fábrica que cria objetos de jogadores
    function criaJogador(nome, simbolo) {
        // Função que marca o símbolo no tabuleiro
        marcar = function(numeroPosicao) {
            if (numeroPosicao < tabuleiro.posicoes.length) { // Se a posição existir na lista
                if (tabuleiro.posicoes[numeroPosicao] != "X" && tabuleiro.posicoes[numeroPosicao] != "O") { // Se a posição não foi marcada
                    console.log(`O jogador ${nome} marcou a posição: ${tabuleiro.posicoes[numeroPosicao]}`)
                    tabuleiro.posicoes[numeroPosicao] = this.simbolo
                } else { // Se já foi marcada
                    console.log("Posição já foi escolhida")
                }
            } else{ // Se a posição não existir na lista
                return("Posição não existe")
            }
        }
        return{marcar, nome, simbolo}
    }
    // Função que controla o fluxo do jogo
    function fluxoJogo(jogador1, jogador2) {
        for (let contador = 0; contador < tabuleiro.posicoes.length; contador++) {
            jogador1.marcar()
            jogador2.marcar()
        }
    }
    
    return {criaJogador, fluxoJogo}
})()

let jogador1 = moduloJogoDaVelha.criaJogador("Vinícius", "X")
let jogador2 = moduloJogoDaVelha.criaJogador("Isa", "O")
console.log(jogador1.marcar(8))
console.log(jogador2.marcar(7))
console.log(jogador1.marcar(6))
console.log(jogador2.marcar(5))
console.log(jogador1.marcar(4))
console.log(jogador2.marcar(7))





