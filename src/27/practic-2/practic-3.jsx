
import { useState } from "react";
export default function App(){
    const [check, setCheck] = useState(false)
    return(
        <>
        <h1>Practic-3</h1>
        <div >
            <p>{check ? "dispplay" : "mnonofe"}</p>
            <button onClick={() => {setCheck(!check)}}>check</button>
        </div>
        </>
    )
}