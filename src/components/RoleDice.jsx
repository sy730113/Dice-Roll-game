import React, { useState } from "react";
import { styled } from "styled-components";
// import {Button ,OutlineButton} from "../styled/Button";

export default function RoleDice({ currentDice, roleDice ,setScore,showRules,setShowRules}) {
    const resetScore=()=>{
        setScore(0);
    }
  return (
    <>
      {" "} 
      <Dice onClick={roleDice}>
        <img
          src={`Images/dice${currentDice}.png`}
          alt="dice-image"
          height={150}
          width={150}
        />

        <p>Click on Dice</p>
      </Dice>
      <Btns>
        <div className="buttons">
          <OutlineButton
          onClick={resetScore}
          >Reset Score</OutlineButton>
          <Button 
          onClick={()=>setShowRules((prev)=>!prev)}
          >{showRules?"Hide":"Show"} Rules</Button>
        </div>
      </Btns>
    </>
  );
}

const Dice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
  }
`;
const Button = styled.button`
background-color:black;
color:white;
padding:10px;
border-radius:5px;
border:none;
width:150px;
border:1px solid black;
transition:0.3s background ease-in;
&:hover{
    background-color:white;
    color:black;
    border:1px solid black
    transition:0.3s background ease-in;
}
`;
const OutlineButton = styled.button`

color:black;
padding:10px;
border-radius:5px;
border:none;
width:150px;
border:1px solid black;
transition:0.3s background ease-in;
&:hover{
    background-color:black;
    color:white;
    border:1px solid black
    transition:0.3s background ease-in;
}
`;
const Btns = styled.div`
  display: flex;
  justify-content: center;
  .buttons{
    display:flex;
    flex-direction: column;
    gap: 10px;
  }
`;
