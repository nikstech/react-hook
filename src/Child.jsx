import React, { useContext } from "react";
import { MyContext } from "./components/useContext/UseContext";

const userData = useContext(MyContext);

const Child = () => {
  return (
    <>
      Child - My Name is: {userData.name} and Job is: {userData.job}
    </>
  );
};

export default Child;
