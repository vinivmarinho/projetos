const container = document.querySelector("div#container")
let botao = document.querySelector("button")
botao.addEventListener("click", () =>{
    container.innerHTML = ""
    let numero = prompt("Quantos quadrados você gostaria?")
    if (numero > 100) {
        alert("Número não pode exceder 100")
    } else {
        for (let inicio = 1; inicio <= numero*numero; inicio++) {
            let quadrado = document.createElement("div")
            quadrado.classList.add("quadrado")
            container.appendChild(quadrado)
            // Obs: 1366(Largura total da tela) dividido pela qtd de quadrados. 580(599 height total da tela - 19px de altura do "button" e divido pela quantidade de quadrados)
            let width = 100 / numero + "%" // Width de cada quadrado em porcentagem
            let height = (580 / numero)
            quadrado.style.cssText = `flex: 0 0 ${width}; height: ${height}px`
            quadrado.addEventListener("mouseenter", () => {
                quadrado.classList.add("quadrado_ativo")
            })
            quadrado.addEventListener("mouseleave", () => {
                quadrado.classList.remove("quadrado_ativo") 
            }) 
        }
    }
})


for (let inicio = 1; inicio <= 256; inicio++) {
    let quadrado = document.createElement("div")
    quadrado.classList.add("quadrado")
    container.appendChild(quadrado)

    quadrado.addEventListener("mouseenter", () => {
        // Quando o mouse estiver em cima do quadrado, ele recebe a classe "quadrado_ativo"
        quadrado.classList.add("quadrado_ativo")
    })
    quadrado.addEventListener("mouseleave", () => {
        quadrado.classList.remove("quadrado_ativo")
    }) 
}



/* let quadrado = document.createElement("div")
    quadrado.classList.add("quadrado")
    container.appendChild(quadrado)
    quadrado = ""
*/