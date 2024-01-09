import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const[post,setpost]=useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(result => setpost(result.splice(0,10)))
    
},[])


return   <div>
      
      {post.map((posts)=>
        <h1>{posts.title}</h1>
      )}
    </div>
  
}

export default Fetch;
