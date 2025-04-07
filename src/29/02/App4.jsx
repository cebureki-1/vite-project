import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {

    const [ALL, setAll] = useState("");
    const [Error, setError] = useState("");

    const [Search, setName] = useState("");
    const [bodys, setBody] = useState("");
    function san() {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then((response) => {
                setAll(`${response.data.setup} ... ${response.data.punchline}`);
            })
            .catch((error) => {
                setError(error.message);
            });

    }
    
    
    return (
        <>
        <h1>Generator</h1>
        <button onClick={san}>bas</button>
        <p>{games}</p>

        {Error && <div>{Error}</div>}
        </>
    )
}   