import { useState } from "react";

export default function App() {
    let [count, setCount] = useState("DSDSDS");
    function ass(e){
        setCount(e.target.value)
    }
    return(
        <div>
            <input type="text" id="inp" onChange={ass} />
        <h1>Текст:{count}</h1>
        </div>
    )
}
