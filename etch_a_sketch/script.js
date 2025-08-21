const container = document.querySelector("div#container")
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