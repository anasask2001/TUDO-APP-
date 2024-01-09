import React,{useReducer} from 'react'

const reducer = (state,action)=>{
    switch(action.type){
        case 'increment' :
       return {count: state.count+1,color:"yellow"}

    }

}

const Usereducerr = () => {

    const[state,dispatch]=useReducer(reducer,{count:0,color:"red"})


    return(
<>
<h1 style={{color:state.color}}>{state.count}</h1>
<button onClick={()=>dispatch({type : 'increment'})}>add</button>
<button>less</button>
<button>clear</button>

</>


    )

};
export default Usereducerr
