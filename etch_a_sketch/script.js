const container = document.querySelector("div#container")
for (let inicio = 1; inicio <= 256; inicio++) {
    let mensagem = document.createElement("div")
    mensagem.textContent = "Olá"
    container.appendChild(mensagem)
}



/* let quadrado = document.createElement("div")
    quadrado.classList.add("quadrado")
    container.appendChild(quadrado)
    quadrado = ""
*/