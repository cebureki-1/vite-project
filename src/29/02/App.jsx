import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
    const [games, setGames] = useState([]);
    const [Error, setError] = useState("");
    function san() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setGames(res.data.slice(0, 5));
            })
            .catch((error) => {
                setError(error.message);
            });

    }
    
    
    return (
        <>
        <button onClick={san}>bas</button>
        {games.map((game, index) => (
            <div key={index}>
                <h2>{game.title}</h2>
            </div>
        ))}
        {Error && <div>{Error}</div>}
        </>
    )
}