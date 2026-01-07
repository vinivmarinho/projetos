// Criar componente para o cabeçalho e a barra de pesquisa
import logo from "./assets/logo.svg"; // Importa a logo
import "./style/header.css" // Importa o arquivo de estilo
export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <img src={logo} alt="Teste" />
    </header>
  );
}
