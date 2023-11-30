import logo from './logo.svg';
import './App.css';
import {getPlayerById} from './servicos/api'
import { useState, useEffect } from "react";

function App() {
  const [player, setPlayer] = useState([]);
  async function handleGetPlayer(gameId, tagLine) {
    const PlayerDaAPI = await getPlayerById(gameId, tagLine);
    setPlayer(PlayerDaAPI);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
