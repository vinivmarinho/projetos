let display = document.querySelector("div#input_usuario")
let resultado = document.querySelector("div#resultado")
let numeros = document.querySelectorAll("button.numero") // Todos os botões."numero"
let operadores = document.querySelectorAll("button.operador") // Todos os botões."operador"
let ponto = document.getElementById("ponto")
let primeiro_operando = "" // Recebe os dígitos usados antes do sinal de operação
let digitos = "" // Guarda toda a expressão
let igual = document.getElementById("igual")
let sinal = "" // Recebe o operador
let n1 = ""
let n2 = ""


numeros.forEach((botao) => { // Passa por todos botões dentro de "numeros"
    // Adiciona um evento "click" que chama a função "adiciona_numero"
    botao.addEventListener("click", () => adiciona_numero(botao.textContent))
}) // Ok

function adiciona_numero(numero) { 
    digitos += numero
    resultado.textContent = digitos
} // Ok

operadores.forEach((botao) => {
    botao.addEventListener("click", () => adiciona_operador(botao.textContent))
}) // Ok

function adiciona_operador(operador) {
    // Até aqui só tem números, por isso o primeiro_operando recebe "digitos"
    primeiro_operando = digitos
    display.textContent = digitos + operador
    resultado.textContent = primeiro_operando // O "resultado" continua mostrando o(s) primeiro(s) número(s)
    sinal = operador 
    digitos = "" // Limpa os dígitos para receber o segundo número
} // Ok


function limpar() { // Botão "C" chama essa função
    digitos = "" // Reseta os números
    resultado.textContent = "0" // Mostra 0 no display
    display.textContent = ""
} // Ok

function apagar_ultimo() { // Botão "Del" chama essa função
    digitos = digitos.slice(0, -1) // Apaga o último dígito de "numeros"
    resultado.textContent = digitos // mostra "numeros" no display
    if (resultado.textContent === "") { // Se o display terminar vazio, ele recebe "0"
        resultado.textContent = "0"
    }
}
ponto.addEventListener("click", adiciona_ponto)
function adiciona_ponto() {
    if (!digitos.includes(".")) { // Se o dígito não tiver "."
        let ponto = "."
        if (digitos === "0") {
            digitos = "0."
        } else {
            digitos += ponto    
        }
    }
    resultado.textContent = digitos
}
igual.addEventListener("click", () => operacao(sinal, n1, n2)) // O botão "igual" chama a função "operacao" quando é clicado


// Função que recebe o operador e dependendo do operador, vai chamar uma das funções
function operacao(operador, n1, n2) {
    display.textContent += digitos
    display.textContent += "="
    n1 = parseFloat(primeiro_operando)
    n2 = parseFloat(digitos)
    let resultado_operacao = ""
    if (operador === "+") {
        resultado_operacao = soma(n1, n2)
    } else if (operador === "-") {
        resultado_operacao = subtracao(n1, n2)
    } else if (operador === "*") {
        resultado_operacao = multiplicacao(n1, n2)
    } else if (operador === "/") {
        resultado_operacao = divisao(n1, n2)
    } else if (operador === "%") {
        resultado_operacao = modulo(n1, n2)
    }
    resultado.textContent = resultado_operacao
    digitos = resultado_operacao // Para que quando eu adicione outro número, o resultado apareça como operando 
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
        return "Não é possível dividir por zero"
    } else {
        let divisao = n1 / n2
        return divisao
    }
}
function modulo(n1, n2) {
    return n1 % n2
}






