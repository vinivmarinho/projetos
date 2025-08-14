let botao = document.getElementById("id_teste_gratis")
let nome = document.querySelector("input#id_nome")
let sobrenome = document.querySelector("input#id_sobrenome")
let email = document.querySelector("input#id_email")
let senha = document.querySelector("input#id_senha")

// Função que valida qualquer input //
function validacao(input) {
    if (input.value === "") {
        input.classList.add("placeholder_vermelho")
        input.placeholder = "Por favor, preencha o campo"
    } else {
        input.classList.remove("placeholder_vermelho")
    }
}
// Chama a função "validacao" pra cada input
function valida_campos() {
    validacao(nome)
    validacao(sobrenome)
    validacao(email)
    validacao(senha)
}
botao.addEventListener("click", valida_campos)