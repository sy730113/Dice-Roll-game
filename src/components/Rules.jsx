import React from 'react'
import styled from 'styled-components';
export default function Rules() {
  return (
    <RulesContainer>
        <div className='container'>
        <h2>How to Play Dice game</h2>
        <p>Select any number</p>
        <p>Click on Dice Image</p>
        <p>after click on dice if selected number is equal to dice number
            then you will get same point on dice 
            else you get -2 points
        </p>
        </div>
    </RulesContainer>
  )
}
const RulesContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
.container{
    margin-top:10px;
    width:50%;
    padding:10px;
    background-color:#AF6768;
    border-radius:8px;
}
`;