// Lista que contém as sequências de vitória
let listaGeral = [
    [0 ,1 ,2],
    [3 ,4 ,5],
    [6 ,7 ,8],
]

for (let linha = 0; linha < listaGeral.length; linha++) {
    for (let coluna = 0; coluna < listaGeral.length; coluna++) {
        console.log(listaGeral[linha][coluna])
    }
}