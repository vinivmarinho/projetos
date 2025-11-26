// Criando as variáveis correspondentes as divs do tabuleiro
let comecar = document.getElementById("comecar"); // Botão de start

// Usando o module pattern para deixar variáveis e funções privadas, exceto as que forem retornadas
moduloJogoDaVelha = (function () {
  let posicoes = document.querySelectorAll(".bloco"); // Todos os blocos do tabuleiro. Obs: é uma node List (Uma lista de nós do DOM)
  // Lista que contém as sequências de vitória
  let listaGeral = [
    // Elementos estão em formato string pra combinarem com o id dos elementos HTML
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
  ];
  // Função de fábrica que cria objetos de jogadores
  function criaJogador(nome, simbolo) {
    // Função que marca o símbolo no tabuleiro
    // Passa o bloco que foi clicado
    const marcar = function (bloco) {
      bloco.innerHTML = simbolo; // Adiciona o símbolo no bloco pressionado
    };
    return { marcar, nome, simbolo };
  }

  function iniciarJogo(jogador1, jogador2) {
    let jogadorDaVez = jogador1; // É executado uma única vez, apenas quando a função é chamada
    // Para cada "bloco" dentro de "posicoes"
    posicoes.forEach((bloco) => {
      // Adiciona um evento em cada bloco
      bloco.addEventListener("click", () => {
        // Verificar se o espaço estiver vazio
        if (bloco.innerText === "") {
          jogadorDaVez.marcar(bloco); // Marca o bloco

          // Id do bloco que eu clicar
          let blocoClicado = bloco.id;
          // Loop que percorre a listaGeral
          for (let linha = 0; linha < listaGeral.length; linha++) {
            for (let coluna = 0; coluna < listaGeral.length; coluna++) {
              if (listaGeral[linha][coluna] === blocoClicado) {
                // Se a posição for igual ao id do bloco clicado
                listaGeral[linha][coluna] = jogadorDaVez.simbolo; // A posição marcada recebe o símbolo do jogador
              }
            }
          }
          verificaVencedor();
          // Alternando entre os jogadores
          if (jogadorDaVez === jogador1) {
            jogadorDaVez = jogador2;
          } else {
            jogadorDaVez = jogador1;
          }
        }
      });
    });
  }

  function verificaVencedor() {
    // Verifica linhas
    for (let linha = 0; linha < 3; linha++) {
      if (
        listaGeral[linha][0] !== "" &&
        listaGeral[linha][0] === listaGeral[linha][1] &&
        listaGeral[linha][1] === listaGeral[linha][2]
      ) {
        alert(listaGeral[linha][0]); // Retorna o símbolo
      }
    }
    // Verifica colunas
    for (let coluna = 0; coluna < 3; coluna++) {
      if (
        listaGeral[0][coluna] !== "" &&
        listaGeral[0][coluna] === listaGeral[1][coluna] &&
        listaGeral[1][coluna] === listaGeral[2][coluna]
      ) {
        return listaGeral[0][coluna];
      }
    }
    // Verifica diagonal principal
    if (
      listaGeral[0][0] !== "" &&
      listaGeral[0][0] === listaGeral[1][1] &&
      listaGeral[1][1] === listaGeral[2][2]
    ) {
      return listaGeral[0][0];
    }
    // Verifica a diagonal secundária
    if (
      listaGeral[0][2] !== "" &&
      listaGeral[0][2] === listaGeral[1][1] &&
      listaGeral[1][1] === listaGeral[2][0]
    ) {
      return listaGeral[0][2];
    }
    return null; // Caso não tenha vencedor
  }

  return { criaJogador, iniciarJogo, posicoes };
})();

// Input do formulário
let jogador1Input = document.getElementById("id_nome");
let jogador2Input = document.getElementById("id_nome2");
// Objetos criados da função de fábrica "criaJogador"
let jogador1 = moduloJogoDaVelha.criaJogador(jogador1Input.value, "X"); // ".value" => Pega o valor digitado pelo usuário
let jogador2 = moduloJogoDaVelha.criaJogador(jogador2Input.value, "O");

comecar.addEventListener(
  "click",
  moduloJogoDaVelha.iniciarJogo(jogador1, jogador2)
); // Chama a função "jogar" quando o botão é clicado


