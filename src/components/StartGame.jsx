import React from 'react';
import styled from 'styled-components';
export default function StartGame({toggle}) {
  return (
    <Container>
    <img src='Images/dices.png' height={522} width={522}></img>
    <div className='content'>
    <h1>DICE GAME</h1>
    <div className='play'>
    <Button
    onClick={toggle}
    >Play Now</Button>
    </div>
    </div>
    </Container>
  )
}

const Container=styled.div`
max-width:1000px;
height:522px;
display: flex;
align-items: center;
justify-content: space-between;
.content{
    .play{
        display: flex;
      justify-content: flex-end;
    }
    h1{
        font-size: 96px;
        font-weight: 700;
        color: #000000;
        margin-bottom: 10px;
        white-space: nowrap;
    }
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
