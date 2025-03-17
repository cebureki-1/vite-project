
import { useState } from 'react';
export default function App(){
    let [count, setCount] = useState(0)
    function plus(){
        setCount(count + 1)
    }
    function minus(){
        setCount(count - 1)
    }

    if(count < 0){
        alert("0 az bolmay kerek")
        setCount(0)
    }else if(count > 10){
        alert("10 dan katta bolmay kerek")
        setCount(10)
    }
    return (
       <div>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
       </div> 
    )
}