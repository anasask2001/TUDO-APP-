import React, { useEffect, useState } from "react";

const Appp = () => {
  const [togle, settogle] = useState(false);
  const[load,setload]=useState(true)

  useEffect(() => {
    console.log("hello anas");
  },[togle]);

  const toglefun = () => {
    settogle(!togle);
  };
  useEffect(() => {
    setTimeout(() => {
        setload(false)
    },5000);
  },[]);
  return (
    <>
      {togle ? alert("ON") : alert("OFF")}
      <div>{load?<p>haiiii</p>:<p>helooo</p>}</div>
      <button onClick={toglefun}>ACTIVATE</button>
    </>
  );
};

export default Appp;
