// import React from 'react'
// import App from './App'
// import Component1 from './Component/Component1'

// const props = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <Component1 name={props.name}/>
      
//     </div>
//   )
// }

// export default props
import React, { useState, useEffect } from "react";

function HHelo() {
  const [set, update] = useState(false);
  const aa = () => {
    if(set === false){
      update(true);
    }
    else{
      update(false);
    }
    
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [set]);
  return (
    <>
      <button onClick={aa}>click</button>
      {set ? <h1>helo</h1> : <h1>hai</h1>}
    </>
  );
}


export default HHelo;
