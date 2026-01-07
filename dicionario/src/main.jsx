// Arquivo que inicializa o React dentro do HTML
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css"; // Importa o arquivo de estilo para toda a aplicação
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
