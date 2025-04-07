import axios from "axios";
import { useEffect, useState } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Search from "./Search.jsx";
import MovieList from "./Movielist.jsx";
import MovieDetails from "./MovieDetails.jsx";

export default function App() {
    const [movies, setMovies] = useState([])

    return (
        <div>
            <h1>Search movies</h1>
            <Search onSearch={setMovies}/>

            <BrowserRouter>
                <Routes>
                <Route path="/" element={<MovieList movies={movies} />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}