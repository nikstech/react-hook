import React, { useState } from "react";

// to get item in storage
const lstorageLists = () => {
  let lsLists = localStorage.getItem("todo List");
  // return JSON.parse(localStorage.getItem("todo List"));
  if (lsLists) {
    return JSON.parse(localStorage.getItem("todo List"));
  } else {
    return [];
  }
};
const Todo = () => {
  const [input, setInput] = useState();
  const [values, setValues] = useState(lstorageLists());

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    setValues((oldData) => {
      return [...oldData, input];
    });
    setInput("");
  };

  // set item in local stoarge
  localStorage.setItem("todo List", JSON.stringify(values));

  const handleRemove = (i) => {
    const updatedList = values.filter((el, id) => {
      return i != id;
    });
    setValues(updatedList);
  };
  const alignment = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  return (
    <>
      <input
        type="text"
        pattern="^[A-Ba-z ]*$"
        value={input}
        onChange={handleInput}
        required
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {values.map((value, id) => {
          return (
            <li key={id}>
              <div style={alignment}>
                <span>{value}</span>
                <button onClick={() => handleRemove(id)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
