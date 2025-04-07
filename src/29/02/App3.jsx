import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    const [order, setorder] = useState("");
    const [Error, setError] = useState("");
    const [name, setName] = useState("");
    const [bodys, setBody] = useState("");
    function san() {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: name,
                body: bodys,
                })
            .then((response) => {
                setorder(`ТАпсырыс алынды ID:${response.data.id}`);
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    return (    
        <>
        <h1>Order</h1>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="pizza name " value={bodys} onChange={(e) => setBody(e.target.value)}/>
        <button onClick={san}>Submit</button>
        <p>{order}</p>
        {order && <div>{order}</div>}x
        </>
    )
}