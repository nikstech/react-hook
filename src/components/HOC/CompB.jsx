import React from "react";
import Counter from "./Counter";

const CompB = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <h1>Comp B clicked {count} times</h1>
      <button onMouseOut={increment}>Click ME</button>
    </div>
  );
};

export default Counter(CompB);
