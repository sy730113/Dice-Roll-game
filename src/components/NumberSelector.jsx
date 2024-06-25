import React from "react";
import { styled } from "styled-components";
import styles from "./NumberSelector.module.css";
import { useState } from "react";


export default function NumberSelecter({ selected, setSelected, error, setError }) {
  const diceNumbers = [1, 2, 3, 4, 5, 6];
  const errorHandler = (value) => {
    setSelected(value);
    setError("");
  };

  return (
    <>
      <Mein>
        <p style={{ color: "red", marginLeft: "300px" }}>{error}</p>
        <div className={styles.flex}>
          {diceNumbers.map((value, index) => {
            return (
              <Box
                isSelected={value === selected}
                onClick={() => {
                  errorHandler(value);
                }}
                key={index}
              >
                {value}
              </Box>
            );
          })}
        </div>
        <div className={styles.select}>
          <p>Select a Number</p>
        </div>
      </Mein>
    </>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border: 3px solid black;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

const Mein = styled.div`
  width: 50%;
`;
