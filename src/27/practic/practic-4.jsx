import { useState } from "react";

export default function App(){
    let [count, useCount] = useState([])
    let [ass, Usestats] = useState()
    function sas(){
        const input = document.querySelector("#inp").value
        useCount( ...count, input)
    }
    return(
        <>
        <input type="text" id="inp"/><button onClick={sas}>Kosy</button>
        <ul>
            <li>{count}</li>
        </ul>
        </>
    )
}