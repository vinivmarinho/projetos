let adicionar = document.querySelector("button#adicionar")
let redes_sociais = document.querySelector("button#redes_sociais")
let checkbox = document.querySelector("input#id_lido")
let label_classificacao = document.querySelector("label#label_classificacao")
let input_classificacao = document.querySelector("input#id_classificacao")
let span_valor = document.querySelector("span#valor")
let formulario = document.querySelector("form#formulario")
let documento = document.querySelector("html")
let jaLido = document.querySelector("button#jaLido")
// Verifica se o checkbox está marcado.
checkbox.addEventListener("change", verificar)
function verificar() {
    if (checkbox.checked) { // Se estiver marcado: O input de classificação aparece para o usuário avaliar o livro
        label_classificacao.style.cssText = "display: block;"
        input_classificacao.style.cssText = "display: block;"
        span_valor.style.cssText = "display: block;"
    } else if (!checkbox.checked) {
        label_classificacao.style.cssText = "display: none;"
        input_classificacao.style.cssText = "display: none;"
        span_valor.style.cssText = "display: none;"
    }
}

// Chama o formulário quando aperta no botão "adicionar"
adicionar.addEventListener("click", display_formulario)
function display_formulario() {
    formulario.style.display = "flex"

}
documento.addEventListener("click", function(evento) {
    // Se o alvo do clique(evento.target) estiver fora do formulário e o alvo do clique for diferente do botão "adicionar", o formulário desaparece
    if (!formulario.contains(evento.target) && evento.target !== adicionar) {
        formulario.style.display = "none"
    }
})

// Muda a cor do botão "Lido" ou "Não lido"
jaLido.addEventListener("click", () => {
    if (jaLido.innerText === "Já lido") {
        jaLido.style.cssText = "background-color: #E58C8C;"
        jaLido.innerText = "Não lido"
    } else if (jaLido.innerText === "Não lido") {
        jaLido.style.cssText = "background-color: #74bb71"
        jaLido.innerText = "Já lido"
    }
})

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
