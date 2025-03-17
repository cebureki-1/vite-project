import { useState } from "react";
export default function Project1(){
    const [text, setText] = useState("Click me")
    const [count, setCount] = useState(true)
    const Temp = 50

    
    return(
        <>
        <button >{count }</button>
        <p>{Temp<= 0 ?  "very cold: " + Temp : Temp <= 14 ? " cold: " + Temp : Temp>= 15 && 29 >= Temp ? " good: " + Temp  : Temp>=30 && 40 >= Temp ? "hot: " + Temp : Temp>40 ? "very very hot: " + Temp : Temp  }</p>
        </>
    )
}