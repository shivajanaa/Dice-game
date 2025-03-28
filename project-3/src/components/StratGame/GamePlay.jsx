
import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import Rules from "./Rules"
import { Button, OutlineButton } from "../Button/Button"
const GamePlay = () => {


  
const [score, setsScore] = useState(0);




  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);




 


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
 const rollDice = () => {

  if(!selectedNumber){
    setError("Not Selected")
    return;
  }
  
    setError("");
  




    const randomNumber =generateRandomNumber(1, 7);
    setCurrentDice ((prev) => randomNumber);
   

if (selectedNumber === randomNumber){
  setsScore((prev) => prev + randomNumber);
}
else{
  setsScore((prev) => prev - 2);
}

setselectedNumber(undefined);


 }   ;

 const resetScore = () =>{
  setsScore(0)
 }

  return (
  <Main>
    <NavBAr>
    <TotalScore score={score}/>
  <NumberSelector 
  error={error}
  setError={setError}
  selectedNumber={selectedNumber}
  setselectedNumber={setselectedNumber}/>
  </NavBAr>
  <RollDice currentDice={currentDice}
  rollDice={rollDice} />
  <div className="btns">
    <OutlineButton onClick={resetScore}>Reset</OutlineButton>
    <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
 { showRules && <Rules/>}
  </Main>
  )
}


export default GamePlay

const NavBAr = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:2em;
overflow:hidden;`;

const Main =  styled.div`
.btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;