import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const UseRefInputBgColor = () => {
  const inputBg = useRef();

  const changeBgColor = () => {
    inputBg.current.focus();
    inputBg.current.style.backgroundColor = "red";
    // console.log(inputBg.current);
  };
  return (
    <Wrapper>
      <input type="text" ref={inputBg} />
      <br />
      <button onClick={changeBgColor}>Submit</button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default UseRefInputBgColor;
