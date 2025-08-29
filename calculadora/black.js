function operacao(operador, expressao) {
    // "IndexOf" encontra o índice da primeira ocorrência de um caractere
    let posicao = digitos.indexOf(operador)
    if (posicao === -1) {
        resultado.textContent = "Erro: operador não encontrado"
        return
    }
    // Extrai os números antes e depois do operador
    // Substring => extrai uma parte da string original, retornando uma nova string.
    let n1 = parseFloat(digitos.substring(0, posicao)) // 0 => Do primeiro índice até a "posicao" (até a posição do operador)
    let n2 = parseFloat(digitos.substring(posicao + 1)) // posicao => Da posição do operador até o final da string(é isso oq +1 representa)
    if (isNaN(n1) || isNaN(n2)) {
        resultado.textContent = "Erro: número inválido"
        return
    }


    let resultadoOperacao
    // Realiza a operação conforme o operador
    if (operador === "+") {
        resultadoOperacao = n1 + n2
    } else if (operador === "-") {
        resultadoOperacao = n1 - n2
    } else if (operador === "*") {
        resultadoOperacao = n1 * n2
    } else if (operador === "/") {
        if (n2 === 0) {
            resultado.textContent = "Erro: divisão por zero"
            return
        }
    }
