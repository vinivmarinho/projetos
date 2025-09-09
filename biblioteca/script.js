let adicionar = document.querySelector("button#adicionar")
let redes_sociais = document.querySelector("button#redes_sociais")
let checkbox = document.querySelector("input#id_lido")
let label_classificacao = document.querySelector("label#label_classificacao")
let input_classificacao = document.querySelector("input#id_classificacao")
let span_valor = document.querySelector("span#valor")
// Verifica se o checkbox está marcado
checkbox.addEventListener("change", verificar)
function verificar() {
    if (checkbox.checked) {
        label_classificacao.style.cssText = "display: block;"
        input_classificacao.style.cssText = "display: block;"
        span_valor.style.cssText = "display: block;"
    } else if (!checkbox.checked) {
        label_classificacao.style.cssText = "display: none;"
        input_classificacao.style.cssText = "display: none;"
        span_valor.style.cssText = "display: none;"
    }
}

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

function display_livro(array_livraria) {
    // Percorre o Array e mostra todos os livros
    for (livro of array_livraria) {
        console.log(`${livro.titulo}`)
    }
}

livro1 = new cria_livro("Harry Potter", "Fulano", 2025)
livro2 = new cria_livro("Percy Jackson", "Ciclano", 2000)
adiciona_livro(livro1)
adiciona_livro(livro2)
display_livro(livraria)
