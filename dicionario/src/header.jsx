// Arquivo cria componente para o cabeçalho e a barra de pesquisa
import logo from "./assets/logo.svg"; // Importa a logo
import "./style/header.css"; // Importa o arquivo de estilo
export default function Cabecalho({ fonte, setFonte }) {
  return (
    <header className="cabecalho">
      <Logo />
      <SelecionaFonte fonte={fonte} setFonte={setFonte}/>
      <input type="checkbox" name="" id="" />
    </header>
  );
}
// Componente da logo
function Logo() {
  return <img src={logo} alt="Logo" />;
}

// Controla a escolha da fonte
function SelecionaFonte({ fonte, setFonte }) {
  const fontes = ["Inter", "Poppins", "Roboto", "Merriweather"]; // Lista de fontes
  return (
    // "select" cria o menu. O "value" é a opção que está selecionada do estado "fonte"
    // O "onChange" dispara quando o usuário escolhe outra opção, depois atualiza o estado
    // Uso o método "map" para criar as opções do menu percorrendo a lista de fontes
    // Obs: o "evento.target" é o elemento HTML que disparou o evento. (<select>, <input> ou <textarea> )
    <select value={fonte} onChange={(evento) => setFonte(evento.target.value)}>
      {fontes.map((f) => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </select>
  );
}

// Próximo passo => Adicionar a funcionalidade que mude a fonte da página de acordo com a escolha do usuário de fato

