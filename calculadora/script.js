let display = document.querySelector("div#input_usuario")
let resultado = document.querySelector("div#resultado")
let numeros = document.querySelectorAll("button.numero") // Todos os botões."numero"
let operadores = document.querySelectorAll("button.operador") // Todos os botões."operador"
let ponto = document.getElementById("ponto")
let primeiro_operando = "" // Recebe os dígitos usados antes do sinal de operação
let digitos = "" // Guarda toda a expressão
let igual = document.getElementById("igual")
let sinal = "x" // Recebe o operador


numeros.forEach((botao) => { // Passa por todos botões dentro de "numeros"
    // Adiciona um evento "click" que chama a função "adiciona_numero"
    botao.addEventListener("click", () => adiciona_numero(botao.textContent))
}) 

function adiciona_numero(numero) { 
    digitos += numero
    resultado.textContent = digitos
} 

operadores.forEach((botao) => {
    botao.addEventListener("click", () => adiciona_operador(botao.textContent))
}) 

function adiciona_operador(operador) {
    console.log(`Operando: ${primeiro_operando}`)
    console.log(`Dígitos: ${digitos}`)
    // Já existe uma operação pendente => Resolve antes de continuar
    if (primeiro_operando != "" && digitos != "") {
        console.log(`Operando: ${primeiro_operando}`)
        let resultado_operacao = operacao(sinal, parseFloat(primeiro_operando), parseFloat(digitos))
        resultado.textContent = resultado_operacao
        primeiro_operando = resultado_operacao
        digitos = "" // Limpa os dígitos para receber o segundo número
    } else { // Primeira vez que o operador é clicado
        primeiro_operando += digitos // Recebe a primeira parte da expressão. (OBS: Não limpa o "primeiro_operando", fazendo com que a troca de operadores não remova o número que está antes)
        digitos = ""
        
    }
    sinal = operador
    display.textContent = primeiro_operando + operador 
    
    
} 


function limpar() { // Botão "C" chama essa função
    digitos = "" // Reseta os números
    primeiro_operando = "" 
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
igual.addEventListener("click", () => {
    if (primeiro_operando != "" && digitos != "") {
        let resultado_operacao = operacao(sinal, parseFloat(primeiro_operando), parseFloat(digitos))
        display.textContent = primeiro_operando + sinal + digitos + "="
        resultado.textContent = resultado_operacao
        digitos = resultado_operacao
        primeiro_operando = ""
    }
}) // O botão "igual" chama a função "operacao" quando é clicado


// Função que recebe o operador e dependendo do operador, vai chamar uma das funções
function operacao(operador, n1, n2) {
    display.textContent += digitos
    display.textContent += "="
    n1 = parseFloat(primeiro_operando)
    n2 = parseFloat(digitos)
    if (operador === "+") return soma(n1, n2)
    if (operador === "-") return subtracao(n1, n2)
    if (operador === "x") return multiplicacao(n1, n2)
    if (operador === "÷") return divisao(n1, n2)
    if (operador === "%") return modulo(n1, n2)
    resultado.textContent = resultado_operacao
    primeiro_operando = resultado_operacao // Para que quando eu adicione outro número, o resultado apareça como operando 
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






