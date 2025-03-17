import { useState } from "react";
export default function App(){
    const [check, setCheck] = useState(true)
    return(
        <>
        <h1>Practic-2</h1>
        <div style={{width: "100px", height: "100px ", backgroundColor: check ? "black" : "white"}}>
            <button onClick={()=> {setCheck(!check)}}>check</button>
        </div>
        </>
    )
}