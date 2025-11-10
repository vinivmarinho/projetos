// Criando as variáveis correspondentes as divs do tabuleiro 
let comecar = document.getElementById("comecar") // Botão de start

// Usando o module pattern para deixar variáveis e funções privadas, exceto as que forem retornadas
moduloJogoDaVelha = (function() {
    let posicoes = document.querySelectorAll(".bloco") // Todos os blocos do tabuleiro. Obs: é uma node List (Uma lista de nós do DOM)

    // Função de fábrica que cria objetos de jogadores
    function criaJogador(nome, simbolo) {
        // Função que marca o símbolo no tabuleiro
        const marcar = function(bloco) { // Passa o bloco que foi clicado
            bloco.innerHTML = simbolo // Adiciona o símbolo no bloco pressionado
        }
        return {marcar, nome, simbolo}
    }
    
    function iniciarJogo(jogador1, jogador2) {
        let jogadorDaVez = jogador1 // É executado uma única vez, apenas quando a função é chamada

        posicoes.forEach(bloco => { // Para cada "bloco" dentro de "posicoes"
            bloco.addEventListener("click", () => { // Adiciona um evento em cada bloco
                jogadorDaVez.marcar(bloco) // Marca o bloco

                // Alternando entre os jogadores
                if (jogadorDaVez === jogador1) {
                    jogadorDaVez = jogador2
                } else {
                    jogadorDaVez = jogador1
                }
            })
        })
    }

    return {criaJogador, iniciarJogo}
})()


// Input do formulário
let jogador1Input = document.getElementById("id_nome")
let jogador2Input = document.getElementById("id_nome2")
// Objetos criados da função de fábrica "criaJogador"
let jogador1 = moduloJogoDaVelha.criaJogador(jogador1Input.value, "X") // ".value" => Pega o valor digitado pelo usuário
let jogador2 = moduloJogoDaVelha.criaJogador(jogador2Input.value, "O")


comecar.addEventListener("click", moduloJogoDaVelha.iniciarJogo(jogador1, jogador2)) // Chama a função "jogar" quando o botão é clicado




