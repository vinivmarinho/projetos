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
    label_classificacao.style.cssText = "display: none;"
    input_classificacao.style.cssText = "display: none;"
    span_valor.style.cssText = "display: none;"

}
documento.addEventListener("click", function(evento) {
    // Se o alvo do clique(evento.target) estiver fora do formulário e o alvo do clique for diferente do botão "adicionar", o formulário desaparece
    if (!formulario.contains(evento.target) && evento.target !== adicionar) {
        formulario.style.display = "none"
        formulario.reset()
    }
})



// Adiciona os valores do formulário à um cartão
submit.addEventListener("click", salva_livro)
function salva_livro(evento) { // Salva info do formulário em um cartão
    evento.preventDefault() // Impede o reload da página e não envia o formulário para o servidor
    let input_titulo = document.querySelector("input#id_titulo") // Valor do input do título
    let input_autor = document.querySelector("input#id_autor") // Valor do input do autor
    let input_ano = document.querySelector("input#id_ano") // Valor do input do ano de lançamento
     // Se algum campo estiver vazio
    if (input_titulo.value === "" || input_autor.value === "" || input_ano.value ==="") {
        alert("Por favor, preencha todos os campos")
    } else { // Se estiver preenchido
        let ano_atual = new Date().getFullYear()
        if (input_ano.value <= ano_atual) { // Se o ano for menor que 2025
            let livro = new cria_livro(input_titulo.value, input_autor.value, input_ano.value) // Criando um livro com os inputs
            formulario.style.display = "none" // Formulário some
            cria_cartao_livro(livro) // Cria cartão com o Livro
            formulario.reset() // Reseta os valores do formulário
        } else {
            alert("Ano de lançamento do livro inválido")
        }
    }
    


   

    
}

function cria_cartao_livro(livro) {
    let container_cards = document.querySelector("div#cards")

    let cartao = document.createElement("div")
    cartao.classList.add("card")
    cartao.dataset.id = livro.id

    // Cria cada elemento individualmente
    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = livro.titulo

    let autor = document.createElement("p")
    autor.classList.add("autor")
    autor.textContent = livro.autor

    let ano = document.createElement("p")
    ano.classList.add("ano")
    ano.textContent = livro.ano

    let botao1 = document.createElement("button")
    botao1.classList.add("jaLido")
    botao1.textContent = "Já lido"
    botao1.addEventListener("click", () => { // Muda a cor do botão "Lido" ou "Não lido" pra cada cartão
        if (botao1.innerText === "Já lido") {
        botao1.style.cssText = "background-color: #E58C8C;"
        botao1.innerText = "Não lido"

    } else if (botao1.innerText === "Não lido") {
        botao1.style.cssText = "background-color: #74bb71"
        botao1.innerText = "Já lido"
    }
    })

    let botao2 = document.createElement("button")
    botao2.classList.add("remover")
    botao2.textContent = "Remover"
    botao2.addEventListener("click", () =>{
        container_cards.removeChild(cartao)
    })

    // Cartão adiciona cada elemento
    cartao.appendChild(titulo)
    cartao.appendChild(autor)
    cartao.appendChild(ano)
    cartao.appendChild(botao1)
    cartao.appendChild(botao2)

    // Container de cartões adiciona o cartão   
    container_cards.appendChild(cartao)
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



/* livro1 = new cria_livro("Harry Potter", "Fulano", 2025)
livro2 = new cria_livro("Percy Jackson", "Ciclano", 2000)

armazena_livro(livro1)
armazena_livro(livro2)
display_livro(livraria) */
