// Array de livros
const livraria = []

function cria_livro(titulo, autor, ano) {
    // Construtor do livro
    this.titulo = titulo
    this.autor = autor
    this.ano = ano
    this.id = crypto.randomUUID() // Gera um id único
    console.log("Livro criado com sucesso!")
    console.log(`Título: ${this.titulo}, autor: ${this.autor}, ano: ${this.ano}, Id: ${this.id}`)
}
function adiciona_livro(livro) {
   // Adiciona o livro à "livraria"
   livraria.push(livro) // Array adiciona o objeto "Livro"
   console.log(`${livro["titulo"]} adicionado com sucesso`)
}
livro1 = new cria_livro("Harry Potter", "Fulano", 2025)
livro2 = new cria_livro("Percy Jackson", "Ciclano", 2000)
adiciona_livro(livro1)
adiciona_livro(livro2)
