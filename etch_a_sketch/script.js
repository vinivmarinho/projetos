const container = document.querySelector("div#container")
for (let inicio = 1; inicio <= 256; inicio++) {
    let quadrado = document.createElement("div")
    quadrado.classList.add("quadrado")
    container.appendChild(quadrado)
}



/* let quadrado = document.createElement("div")
    quadrado.classList.add("quadrado")
    container.appendChild(quadrado)
    quadrado = ""
*/