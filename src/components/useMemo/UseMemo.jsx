import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
const UseMemo = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const [item, setItem] = useState(10);
  const multiBox = useMemo(
    function multiply() {
      console.log("multiply........");
      return count * 2;
    },
    [count]
  );
  return (
    <>
      <Wrapper>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Update Value</button>
        <br />
        <h2>multiply:{multiBox}</h2>
        <h1>Item: {item}</h1>
        <button onClick={() => setItem(item + 1)}>Update Value</button>
      </Wrapper>
    </>
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
export default UseMemo;
