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

    posicoes.forEach(bloco => {
        bloco.addEventListener("click", () => {
            jogadorDaVez.marcar(bloco) // JogadorDaVez vai ficar sendo revezado entre o jogador 1 e 2
        })
    })
    return {criaJogador, posicoes}
})()


// Input do formulário
let jogador1Input = document.getElementById("id_nome")
let jogador2Input = document.getElementById("id_nome2")
// Objetos criados da função de fábrica "criaJogador"
let jogador1 = moduloJogoDaVelha.criaJogador(jogador1Input.value, "X") // ".value" => Pega o valor digitado pelo usuário
let jogador2 = moduloJogoDaVelha.criaJogador(jogador2Input.value, "O")


comecar.addEventListener("click", function() {
    alert("olá")
}) // Chama a função "jogar" quando o botão é clicado




// Teste para adicionar um evento pra cada bloco que for clicado
moduloJogoDaVelha.posicoes.forEach(bloco => {
    bloco.addEventListener("click", () => {
        // Testando usar a função "marcar" que eu criei
        jogador1.marcar(bloco)
        // alert(`Você clicou na posição: ${bloco.innerHTML}`)
    })
}) 
