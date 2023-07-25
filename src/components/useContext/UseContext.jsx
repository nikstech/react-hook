import React, { createContext } from "react";

const MyContext = createContext();

const UseContext = ({ children }) => {
  const userData = {
    name: "Nik",
    job: "SE",
  };
  return <MyContext.Provider value={userData}>{children}</MyContext.Provider>;
};

// export default UseContext ;
export { MyContext, UseContext };
