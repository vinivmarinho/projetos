// Arquivo que contém o componente principal "App". Aqui é escolhido qual código vai rodar
import { useState } from "react";
import "./style/App.css"; // Importa o estilo
import Cabecalho from "./header.jsx";
function App() {
  const [fonte, setFonte] = useState("Arial"); // Estado que armazena a fonte atual e escolhida pelo usuário. ("fonte" => state atual. "setFonte" => Função que atualiza a fonte. "Arial" => Valor usado no primeiro render)
  return (
    <div>
      <Cabecalho />
    </div>
  );
}

export default App;
