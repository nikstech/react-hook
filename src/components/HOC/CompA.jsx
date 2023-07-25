import React from "react";
import Counter from "./Counter";

const CompA = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <h1>Comp A clicked {count} times</h1>
      <button onClick={increment}>Click ME</button>
    </div>
  );
};

export default Counter(CompA);

// const y = '6+7';
// console.log(parseInt(y));
// VM13727:2 6
// undefined
