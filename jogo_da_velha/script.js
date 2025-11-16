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
moduloJogoDaVelha = (function () {
  // Tudo dentro do módulo está encapsulado e só pode ser acessado fora dele se for retornado no final
  let tabuleiro = {
    posicoes: Array(9).fill(null), // Preenche todas as posições com null
  };

  // Função de fábrica que cria objetos de jogadores
  function criaJogador(nome, simbolo) {
    // Função que marca o símbolo no tabuleiro
    marcar = function (numeroPosicao) {
      if (numeroPosicao < tabuleiro.posicoes.length) {
        // Se a posição existir na lista
        if (tabuleiro.posicoes[numeroPosicao] === null) {
          // Se a posição for igual a "vazio"
          console.log(`O jogador ${nome} marcou a posição: ${numeroPosicao}`);
          tabuleiro.posicoes[numeroPosicao] = this.simbolo;
        } else {
          // Se já foi marcada
          console.log(`Posição ${numeroPosicao} já foi escolhida`);
        }
      } else {
        // Se a posição não existir na lista
        return "Posição não existe";
      }
    };
    return { marcar, nome, simbolo };
  }

  let fluxoJogo = {
    jogar(jogador1, jogador2) {
      for (let contador = 0; contador < tabuleiro.posicoes.length; contador++) {
        jogador1.marcar(Math.floor(Math.random() * 9) + 1);
        jogador2.marcar(Math.floor(Math.random() * 9) + 1);
        console.log(tabuleiro.posicoes);
      }
    },
  };

  return { criaJogador, fluxoJogo };
})();

let jogador1 = moduloJogoDaVelha.criaJogador("Vinícius", "X");
let jogador2 = moduloJogoDaVelha.criaJogador("Isa", "O");
moduloJogoDaVelha.fluxoJogo.jogar(jogador1, jogador2);
