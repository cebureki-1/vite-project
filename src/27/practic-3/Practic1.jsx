import { useState } from "react";

export default function Project1(){
    const [text, SetText ] = useState(["click me ", "clicked  ", "unclicked "])
    const [count, setCount] = useState(true)
    const [input, setInput] = useState(false)

    function Removeitem(index){
        SetText(text.filter((item, i) => i !== index))
    }

    function Done(index){
        SetText(text.filter((item, i) => i !== index))
    }

    function NoteDone(index){
        SetText(text.filter((item, i) => i !== index))
    }

    function OnlyDone(index){
        SetText(text.filter((item, i) => i !== index))
    }

    return(
        <>
        <div>
            <button onClick={()=> Done()}>done</button>
            <button>note done</button>
            <button>only done</button>
            <ul>
               {text.map((item, index) => ((
                <li key={index}>
                {item} <button key={index} onClick={() => Removeitem(index)}>{"🗑️"}</button>
                <button key={index} onClick={() => on(index)}>{"✅"}</button>
                <button key={index} onClick={() => Removeitem(index)}>{"❌"}</button>
                </li>
            )))} 
            </ul>
        </div>
        </>
    )
}