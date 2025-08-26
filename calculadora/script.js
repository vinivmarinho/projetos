function soma(...numeros) { // O "...numeros" pega todos os valores passados e transforma em um array
    let total = 0
    for (let numero of numeros) {
        total += numero
    }
    return total
}
function subtracao(...numeros) {
    let total = numeros[0] // Começa com o primeiro número do array
    for (let contador = 1; contador < numeros.length; contador++) {
        total -= numeros[contador] // Subtrai de total o array "numeros" na posição de contador
    }
    return total
}
function multiplicacao(...numeros) {
    let total = numeros[0]
    for (let contador = 1; contador < numeros.length; contador++) {
        total *= numeros[contador]
    }
    return total
}

function divisao(...numeros) {
    let total = numeros[0]
    for (let contador = 1; contador < numeros.length; contador++) {
        if (numeros[contador] === 0) {
            alert("Não é possível dividir por zero")
            return null // Interrompe a função e retorna nulo
        } else{
            total /= numeros[contador]
        }
    }
    return total
}

console.log(divisao(100, 10, multiplicacao(1, 2)))