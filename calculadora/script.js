let display = document.querySelector("div#input_usuario")
let resultado = document.querySelector("div#resultado")
let numeros = document.querySelectorAll("button.numero") // Todos os botões.numero"
let digitos = ""
numeros.forEach((botao) => {
    botao.addEventListener("click", () => adiciona_numero(botao.textContent))
}) // Parei aqui, adicionei um eventlistener pra cada botão, e ele chama a função "adiciona_numero"






function adiciona_numero(numero) {
    digitos += numero
    resultado.textContent = digitos
}


function limpar() { // Botão "C" chama essa função
    digitos = "" // Reseta os números
    resultado.textContent = "0" // Mostra 0 no display
}

function apagar_ultimo() { // Botão "Del" chama essa função
    digitos = digitos.slice(0, -1) // Apaga o último dígito de "numeros"
    resultado.textContent = digitos // mostra "numeros" no display
    if (resultado.textContent === "") { // Se o display terminar vazio, ele recebe "0"
        resultado.textContent = "0"
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