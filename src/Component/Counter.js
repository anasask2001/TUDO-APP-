import React,{useState}  from "react";

function Counter(props) {
  const [count, setcount] = useState(0);

  const Add = () => {
setcount((x)=>x+1)
setcount((x)=>x+2)
  };

  const Less = () => {
 if(count> 0){
  setcount(count-1)
 }
  };

  return (
    <>
      <h1>Count:{count}</h1>
      <button style={{backgroundColor:"red",color:"white"}} onClick={Add}>{props.btn}</button>
      <button style={{backgroundColor:"blue",color:"white"}} onClick={Less}>{props.btn1}</button>
    </>
  );
}
export default Counter;
