import React, { useState } from "react";
import axios from "axios";

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log(e.target.value);
        
        if (!query.trim()) return;

        setIsLoading(true);
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?apikey=17dec6d0&s=${query}`
            );
            if (response.data.Response === "False") {
                onSearch([]);
                setError("Фильм табылмады!");
            } else {
                onSearch(response.data.Search);
                setError("");
            }
        } catch (error) {
            console.log("Error:", error);
            setError("Фильмдерді іздеу кезінде қате пайда болды!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={searchMovies}>
            <input
                type="text"
                placeholder="Фильм атауын енгізіңіз"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Іздеу..." : "Іздеу"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};

export default Search;