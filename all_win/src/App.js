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


    </div>
  );
}

export default App;
