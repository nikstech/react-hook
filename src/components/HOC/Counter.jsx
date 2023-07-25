import React, { useState } from "react";

const Counter = (CatchComp) => {
  const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <>
        <CatchComp increment={increment} count={count} />
      </>
    );
  };
  return Counter;
};

export default Counter;
