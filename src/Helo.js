import React ,{useState} from 'react'

const Helo = () => {

const [name,setname]=useState("anas")


  return (
<>

<h1>{name}</h1>
<button onClick={()=>{
    setname("")
}}>clear</button>


</>

  )


}

export default Helo