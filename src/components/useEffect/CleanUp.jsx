import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CleanUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);  
  const currentScreenSize = () => {
    setWidthCount(()=> window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", currentScreenSize);
    return () =>{
        window.removeEventListener('resize', currentScreenSize)
    }
  });
  return (
    <Wrapper>
      <div className="container">
        <h2>
          The size of the window is <span> {widthCount} </span>
        </h2>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    line-height: 5.2rem;
    font-size: 4.2rem;
  }
  span {
    color: #2e86c1;
  }
`;
export default CleanUp;
