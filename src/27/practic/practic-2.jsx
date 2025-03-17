import { useState } from "react";
let num = 0;
export default function App() {
    let [count, setCount] = useState("none")
    
    function random() {
        if (num >= 4 && num <= Infinity) {
            console.log(num);
            
            document.getElementById("history").length;
            
            

            console.log(document.getElementById("history"));
            
            const div = document.createElement("div");
            document.getElementById("history").appendChild(div);
            
            const rand = ["red", "blue", "yellow", "blue", "gold", "black", "orange", "green", "aqua", "brown"]
            const random = parseInt(Math.random() * rand.length);
            setCount(rand[random]);

        } else {
            
            const rand = ["red", "blue", "yellow", "blue", "gold", "black", "orange", "green", "aqua", "brown"]
            const random = parseInt(Math.random() * rand.length);
            setCount(rand[random]);
            
            const div = document.createElement("div");
            div.innerHTML = `<h1>${rand[random]}</h1>`;
            document.getElementById("history").appendChild(div);
            console.log(num);
            
        }
        num++;
    }
    return (
        <div>
            <h1>History</h1>
            <button onClick={random}>Random</button>
            <div id="history" style={{ backgroundColor: count }}>
                <h1>{count}</h1>
            </div>
            
        </div>
    )
}