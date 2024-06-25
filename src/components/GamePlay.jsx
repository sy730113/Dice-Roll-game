import React from "react";
import {useState} from 'react';
import TotalScore from "./TotalScore";
import NumberSelecter from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Rules from "./Rules";


export default function GamePlay() {
    const [selected, setSelected] = useState(1);
    const [currentDice, setCurrentDice] = useState(1);
    const [score,setScore] = useState(0);
    const [error,setError]=useState("");
    const [showRules,setShowRules] = useState();

    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    
    function roleDice(){
        let randomNumber=generateRandomNumber(1,6);
        if(!selected){
          setError("You have not selected any number");
            return;
        }
        setCurrentDice(randomNumber);
      
       
       if(selected===randomNumber){
        setScore((prev)=>prev+randomNumber)
       }
       else{
        setScore((prev)=>prev-2);
       }
       
       setSelected(undefined);
    }
  return (
    <div>
      <Top>
        <TotalScore 
        score={score}
        />
        <NumberSelecter 
        selected={selected}
        setSelected={setSelected}
        error={error}
        setError={setError}
        />
      </Top>
      <RoleDice 
      currentDice={currentDice}
      setCurrentDice={setCurrentDice}
      generateRandomNumber={generateRandomNumber}
      roleDice={roleDice}
      setScore={setScore}
      showRules={showRules}
      setShowRules={setShowRules}
      />
      {
       showRules&&<Rules />
      }
     
    </div>
     
  );
}

const Top = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
