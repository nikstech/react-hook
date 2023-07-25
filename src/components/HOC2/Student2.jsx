import React from "react";
import HOC from "./HOC";

const Student2 = (props) => {
  const { count, increment } = props;

  return (
    <div>
      <h1>Second clicked {count} times</h1>
      <button onMouseOut={increment}>Click ME</button>
    </div>
  );
};

export default HOC(Student2);
