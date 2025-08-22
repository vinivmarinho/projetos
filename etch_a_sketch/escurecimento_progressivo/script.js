const container = document.querySelector("div#container")
let botao = document.querySelector("button")
// Sorteia uma cor rgb aleatória
function rgb_aleatorio() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function criar_grade(numero) {
     container.innerHTML = ""
     for (let inicio = 1; inicio <= numero*numero; inicio++) {
        let quadrado = document.createElement("div")
        quadrado.classList.add("quadrado")
        container.appendChild(quadrado)

        // Obs: 1366(Largura total da tela) dividido pela qtd de quadrados. 580(599 height total da tela - 19px de altura do "button" e divido pela quantidade de quadrados)
        let width = 100 / numero + "%" // Width de cada quadrado em porcentagem
        let height = (580 / numero)

        quadrado.style.cssText = `flex: 0 0 ${width}; height: ${height}px`

        // Dataset faz com que cada quadrado comece com 0% de escurecimento
        quadrado.dataset.darkness = 0
        // Hover com cor aleatória e escurecimento progressivo
        quadrado.addEventListener("mouseenter", () => {
            // Se o quadrado não tiver "backgroundColor"
            if (!quadrado.style.backgroundColor) { 
                quadrado.style.backgroundColor = rgb_aleatorio()
            } else {
                // O número de vezes que o quadrado foi interagido
                let interacao = parseInt(quadrado.dataset.darkness) 
                if (interacao < 10) {
                    interacao++
                    quadrado.dataset.darkness = interacao
                    // Aplica um filtro de brilho para escurecer o quadrado progressivamente
                    // Cada interação diminui 10% do brilho, até ficar totalmente escuro (0%)
                    quadrado.style.filter = `brightness(${100 - interacao * 10}%)` 
                }
            }
        })
        container.appendChild(quadrado)
}}

criar_grade(16)



// Botão que cria nova grade
botao.addEventListener("click", () =>{
    container.innerHTML = ""
    let numero = prompt("Quantos quadrados você gostaria?")
    if (numero > 100) {
        alert("Número inválido! Escolha um número entre 1 e 100")
    } else {
        criar_grade(numero)
    }
})






/* let quadrado = document.createElement("div")
    quadrado.classList.add("quadrado")
    container.appendChild(quadrado)
    quadrado = ""
*/