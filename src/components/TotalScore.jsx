import React from 'react';
import styled from 'styled-components';

export default function TotalScore({score}) {
  return (
    <ScoreContainer>
        <div>
        <h1>{score}</h1>
        <p>Total Score</p>
        </div>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div`
width: 150px;
display:flex;
justify-content: center;
align-items: center;
text-align:center;
    h1{
      margin:0;
       font-size: 90px;
       font-weight: 800;
       line-height:100px;
    }
    p{
        margin:0;
       font-size:24px;
       font-weight: 500px;
    }
    `;
