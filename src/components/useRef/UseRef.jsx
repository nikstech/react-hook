import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const UseRef = () => {
  const [userInput, setUserInput] = useState();
//   const [count, setCount] = useState(0);

const count = useRef(10)
 console.log(count)
  useEffect(() => {
    // setCount(count + 1); 
  });

  return (
    <Wrapper>
      <input type="text" value={userInput} onChange={setUserInput} />
      <br />
      <p>The number of times called: {count.current}</p>
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
export default UseRef;
