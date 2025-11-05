// Criando as variáveis correspondentes as divs do tabuleiro
let posicoes = document.querySelectorAll(".bloco") // Todos os blocos do tabuleiro
let comecar = document.getElementById("comecar") // Botão de start

comecar.addEventListener("click", function() {
    alert(posicoes[0].innerHTML)
})

// Teste para adicionar um evento pra cada bloco que for clicado
posicoes.forEach(bloco => {
    bloco.addEventListener("click", () => {
        alert(`Você clicou na posição: ${bloco.innerHTML}`)
    })
})