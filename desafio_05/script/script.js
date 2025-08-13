let botao = document.getElementById("id_teste_gratis")
let nome = document.querySelector("input#id_nome")
function teste_gratis() {
    if (nome.value.toLowerCase() === "isabelly" || nome.value.toLowerCase() === "isa") {
        alert("Oi, meu amor! Que saudade!")
    } else {
        alert(`Olá, ${nome.value}! tudo bem?`)
    }
    
}
botao.addEventListener("click", teste_gratis)