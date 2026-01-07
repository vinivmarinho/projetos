// Criar componente para o cabeçalho e a barra de pesquisa
import { useState } from "react";
import logo from "./assets/logo.svg"; // Importa a logo
import "./style/header.css"; // Importa o arquivo de estilo
export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <Logo />
      <SelecionaFonte />
    </header>
  );
}
// Componente da logo
function Logo() {
  return <img src={logo} alt="Logo" />;
}

// Controla a escolha da fonte
function SelecionaFonte({ fonte, setFonte}) {
  const fontes = ["Arial", "Sans-serif", "Serif", "Times New Roman"]; // Lista de fontes
  return (
    // "select" cria o menu. O "value" é a opção que está selecionado do estado "fonte"
    // O "onChange" faz com que quando o usuário escolha outra fonte, ela muda e o react renderiza novamente com a fonte selecionada
    // Uso o método "map" para criar as opções do menu percorrendo a lista de fontes
    <select value={fonte} onChange={(e) => setFonte(e.target.value)}>
      {fontes.map((f) => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </select>
  );
}
