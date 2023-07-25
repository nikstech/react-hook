import React, { useState } from "react";

const HOC = (Student) => {
  const HOCInner = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return <Student count={count} increment={increment} />;
  };
  return HOCInner ;
};

export default HOC;
