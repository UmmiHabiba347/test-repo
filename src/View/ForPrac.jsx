import React from 'react'
import { useState , useEffect } from 'react'
function ForPrac() {
    const [count, setcount] = useState(2)

    
    useEffect(() => {
// the code we want inside useEffect(OPTIONAL RETURN FUNCTION),
console.log('the value of count is:', count)

    },[count]);
  return (
    <>
    <div>
        <h1>Count:{count}</h1>
       <div> <button onClick={() => setcount(count+1)}>Increment</button></div>
    </div>
    </>
  )
}

export default ForPrac