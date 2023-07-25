import React from "react";
import HOC from "./HOC";
const Student1 = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <h1>First clicked {count} times</h1>
      <button onClick={increment}>Click ME</button>
    </div>
  );
};

export default HOC(Student1);
