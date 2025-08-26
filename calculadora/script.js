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