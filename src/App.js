import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

import api from "./services/api";

function App() {
  
  const [input, setInput] = useState("");
  const [cep, setCep] = useState('');

  async function handleSearch() {
    if (input === "") {
      
      alert("Digite um CEP!");
      return;
    }
console.log("🚀 ~ file: App.js:13 ~ handleSearch ~ input:", input)
    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
    } catch {
      alert("ERRO");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>Rua: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Localidade: {`${cep.localidade} - ${cep.uf}`}</span>
      </main>
    </div>
  );
}

export default App;
