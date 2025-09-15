let adicionar = document.querySelector("button#adicionar")
let redes_sociais = document.querySelector("button#redes_sociais")
let checkbox = document.querySelector("input#id_lido")
let info_titulo = document.querySelector("p.titulo") // Título do livro (no cartão)
let info_autor = document.querySelector("p.autor") // Autor do Livro (no cartão)
let info_ano = document.querySelector("p.ano") // Ano de lançamento do Livro (no cartão)
let submit = document.querySelector("input#id_submit") // "adicionar" do formulário
let label_classificacao = document.querySelector("label#label_classificacao")
let input_classificacao = document.querySelector("input#id_classificacao")
let span_valor = document.querySelector("span#valor")
let formulario = document.querySelector("form#formulario")

let documento = document.querySelector("html")
let jaLido = document.querySelector("button.jaLido")

// Verifica se o checkbox ("já li esse livro") está marcado.
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
// Problema: Só funciona com 1 cartão
jaLido.addEventListener("click", () => {
    if (jaLido.innerText === "Já lido") {
        jaLido.style.cssText = "background-color: #E58C8C;"
        jaLido.innerText = "Não lido"
    } else if (jaLido.innerText === "Não lido") {
        jaLido.style.cssText = "background-color: #74bb71"
        jaLido.innerText = "Já lido"
    }
})

// Adiciona os valores do formulário à um cartão
submit.addEventListener("click", salva_livro)
function salva_livro() { // Salva info do formulário em um cartão
    let input_titulo = document.querySelector("input#id_titulo") // Valor do input do título
    let input_autor = document.querySelector("input#id_autor") // Valor do input do autor
    let input_ano = document.querySelector("input#id_ano") // Valor do input do ano de lançamento
    let livro = new cria_livro(input_titulo.value, input_autor.value, input_ano.value) // Criando um livro com os inputs
} 
















// Array de livros
const livraria = []

function cria_livro(titulo, autor, ano) {
    // Construtor do livro
    this.titulo = titulo
    this.autor = autor
    this.ano = ano
    this.id = crypto.randomUUID() // Gera um id único
    livraria.push(this) // Array adiciona o objeto "livro"
}




function display_livro(livraria) { // Futuramente posso usar essa função para ir criando divs para cada objeto no array de livraria
    // Percorre o Array e mostra todos os livros
    for (livro in livraria) {
        // alert(livraria)
    }
}

/* livro1 = new cria_livro("Harry Potter", "Fulano", 2025)
livro2 = new cria_livro("Percy Jackson", "Ciclano", 2000)

armazena_livro(livro1)
armazena_livro(livro2)
display_livro(livraria) */
