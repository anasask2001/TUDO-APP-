import React, { useState } from 'react'

const Bag = ({colur, setcolur}) => {




const chnge =()=>{
   if (colur==="white"){
    setcolur("black")
   }else{
    setcolur("white")
   }
}
  return (
    <div>
      <button  onClick={chnge}>clickme</button>
    </div>
  )
}

export default Bag
