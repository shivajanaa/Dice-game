import styled from "styled-components"
import { Button } from "../Button/Button"
const Startgame = ({toggle}) => {
  return (
   <Container>
    <div>
        <img src="/images/Dices.png" alt="" />
    </div>
    <div className="startP2">
        <h1>DICE GAME</h1>
        <Button
        onClick ={toggle}
        >Play Game</Button>
    </div>
   </Container>
  )
}

export default Startgame
const Container = styled.div`
max-width:1180px;
height:100vh;
display:flex;

align-items:center;
margin:0 auto;



.startP2{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

}
`;