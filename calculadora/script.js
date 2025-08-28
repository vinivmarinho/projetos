let display = document.querySelector("div#input_usuario")
let digitos = "" // String que guarda os dígitos digitados
function atualiza_display(botao) {
    digitos += botao
    display.textContent = digitos
}
function limpar() {
    digitos = "" // Reseta os números
    display.textContent = "0" // Mostra 0 no display
}
function apagar_ultimo() {
    digitos = digitos.slice(0, -1) // Apaga o último dígito de "numeros"
    display.textContent = digitos // mostra "numeros" no display
    if (display.textContent === "") { // Se o display terminar vazio, ele recebe "0"
        display.textContent = "0"
    }
}
function soma(n1, n2) {
    let soma = n1 + n2
    return soma;
}
function subtracao(n1, n2) {
    let subtracao = n1 - n2
    return subtracao
}

function multiplicacao(n1, n2) {
    let multi = n1 * n2
    return multi
}

function divisao(n1, n2) {
    
    if (n2 === 0) {
        alert("Não é possível dividir por zero")
        return null
    } else {
        let divisao = n1 / n2
        return divisao
    }
    
}
// Função que recebe o operador e dependendo do que receber, vai chamar uma das funções já criadas
function operacao(operador, n1, n2) {
    if (operador === "+") {
        return soma(n1, n2)
    } else if (operador === "-") {
        return subtracao(n1, n2)
    } else if (operador === "*") {
        return multiplicacao(n1, n2)
    } else if (operador === "/") {
        return divisao(n1, n2)
    }
}