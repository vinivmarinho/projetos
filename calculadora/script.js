let display = document.querySelector("div#input_usuario")
let resultado = document.querySelector("div#resultado")
let numeros = document.querySelectorAll("button.numero") // Todos os botões."numero"
let operadores = document.querySelectorAll("button.operador") // Todos os botões."operador"
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
igual.addEventListener("click", () => operacao(sinal, n1, n2)) // O botão "igual" chama a função "operacao" quando é clicado


// Função que recebe o operador e dependendo do operador, vai chamar uma das funções
function operacao(operador, n1, n2) {
    // "indexOf" encontra o índice da primeira ocorrência de um caractere
    let posicao = digitos.indexOf(operador)
    // Substring => extrai uma parte da string original, retornando uma nova string
    n1 = parseFloat(digitos.substring(0, posicao)) // 0 => Do primeiro índice até a "posicao" (posicao do operador)
    n2 = parseFloat(digitos.substring(posicao + 1)) // posicao => Posição do operador até o final da string(é isso o que "+1" representa)
    if (operador === "+") {
        resultado.textContent = soma(n1, n2)
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






