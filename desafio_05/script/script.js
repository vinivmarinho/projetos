let botao = document.getElementById("id_teste_gratis")
let nome = document.querySelector("input#id_nome")
let sobrenome = document.querySelector("input#id_sobrenome")
let email = document.querySelector("input#id_email")
let senha = document.querySelector("input#id_senha")

function teste_gratis() {
    if (nome.value === "") {
        nome.classList.add("placeholder_vermelho")
        nome.placeholder = "Por favor, preencha o campo"
    }
    if (sobrenome.value === "") {
        sobrenome.classList.add("placeholder_vermelho")
        sobrenome.placeholder = "Por favor, preencha o campo"
    }
    if (email.value === ""){
        email.classList.add("placeholder_vermelho")
        email.placeholder = "Por favor, preencha o campo"
    }
    if (senha.value === "") {
        senha.placeholder = "Por favor, preencha o campo"
        senha.classList.add("placeholder_vermelho")
    }
}
botao.addEventListener("click", teste_gratis)