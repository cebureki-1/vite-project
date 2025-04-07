import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    const [games, setGames] = useState([]);
    const [Error, setError] = useState("");
    function san() {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then((response) => {
                setGames(`${response.data.setup} ... ${response.data.punchline}`);
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