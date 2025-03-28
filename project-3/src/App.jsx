import Startgame from "./components/StratGame/Startgame"
import { useState } from "react";
import GamePlay from "./components/StratGame/GamePlay";

function App() {
 const [isGameStarted, setIsGameStarted] = useState(false);
 
 const toggleGameplay = () => {
  setIsGameStarted((prev) => !prev);
 };
  return (
<>
{isGameStarted ? <GamePlay/> : <Startgame toggle={toggleGameplay}/> }
    
    </>
  )
}

export default App

