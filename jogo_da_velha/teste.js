// Lista que contém as sequências de vitória
let listaGeral = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

/* for (let linha = 0; linha < listaGeral.length; linha++) {
    for (let coluna = 0; coluna < listaGeral.length; coluna++) {
        console.log(listaGeral[linha][coluna])
    }
} */
// Percorrer toda essa lista e verificar se os índices de "listaGeral" terão o mesmo símbolo
let sequenciasVencedoras = [
  [0, 1, 2], // Linha 1
  [3, 4, 5], // Linha 2
  [6, 7, 8], // Linha 3
  [0, 3, 6], // Coluna 1
  [1, 4, 7], // Coluna 2
  [2, 5, 8], // Coluna 3
  [0, 4, 8], // Diagonal principal
  [2, 4, 6], // Diagonal secundária
];
/* for (let lista = 0; lista < sequenciasVencedoras.length; lista++) {
  let a = sequenciasVencedoras[lista][0];
  let b = sequenciasVencedoras[lista][1];
  let c = sequenciasVencedoras[lista][2];
  let sequencia = [a,b,c]
  console.log(sequencia) 
} */
let simbolo = "x"
// Para cada lista em "sequenciasVencedoras"
for (let sequencia of sequenciasVencedoras) {
  let [a, b, c] = sequencia;
  console.log(listaGeral[b])
}
/* No console:
3,4,5
undefined
undefined
undefined

*/
