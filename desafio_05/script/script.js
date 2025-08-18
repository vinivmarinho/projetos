let botao = document.getElementById("id_teste_gratis")
let nome = document.querySelector("input#id_nome")
let sobrenome = document.querySelector("input#id_sobrenome")
let email = document.querySelector("input#id_email")
let senha = document.querySelector("input#id_senha")
//Função que valida o a quantidade de caracteres
function valida_tamanho(id, tamanhoMinimo) {
    let campo = document.getElementById(id) // Campo recebe o id que será dado ao chamar a função
    // Obs: "campo" se refere ao elemento Html(input). O "id" se refere ao id do elemento Html(input)
    if(campo.value.length < tamanhoMinimo) {
        alert(`O campo "${campo.placeholder}" deve ter pelo menos ${tamanhoMinimo} caracteres`)
        campo.focus() // Foca o mouse no campo correspondente
        campo.classList.add("placeholder_vermelho")
        return false // Validação falhou
    } else{
        campo.classList.remove("placeholder_vermelho")
        return true // Validação concluída
    }
}
// Função que valida se o input estiver vazio //
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
    valida_tamanho("id_nome", 3)
    validacao(sobrenome)
    valida_tamanho("id_sobrenome", 4)
    validacao(email)
    validacao(senha)
    valida_tamanho("id_senha", 8)
}
botao.addEventListener("click", valida_campos)