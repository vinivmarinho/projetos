// Criando as variáveis correspondentes as divs do tabuleiro 
let comecar = document.getElementById("comecar") // Botão de start
moduloJogoDaVelha = (function() {
    let posicoes = document.querySelectorAll(".bloco") // Todos os blocos do tabuleiro

    // Função de fábrica que cria objetos de jogadores
    function criaJogador(nome, simbolo) {
        // Função que marca o símbolo no tabuleiro
        marcar = function(bloco) { // Passa o bloco que foi clicado
            bloco.innerHTML = simbolo // Adiciona o símbolo no bloco pressionado
        }
        return {marcar, nome, simbolo}
    }

    return {criaJogador, posicoes}
})()




let jogador1 = moduloJogoDaVelha.criaJogador("Vini", "X")


comecar.addEventListener("click", function() {
    alert(moduloJogoDaVelha.posicoes[0].innerHTML)
    
})

// Teste para adicionar um evento pra cada bloco que for clicado
moduloJogoDaVelha.posicoes.forEach(bloco => {
    bloco.addEventListener("click", () => {
        // Testando usar a função "marcar" que eu criei
        jogador1.marcar(bloco)
        // alert(`Você clicou na posição: ${bloco.innerHTML}`)
    })
})