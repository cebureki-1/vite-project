import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Search from "./Search.jsx";
import MovieList from "./Movielist.jsx";
import MovieDetails from "./MovieDetails.jsx";

function NotFound() {
    return (
    <>
    <h2>Страница табылмады</h2>
    <Link to={"/"}>Филымды Кайта ыздеу</Link>
    </> 
);
}

export default function App() {
    const [movies, setMovies] = useState([])

    return (
        <BrowserRouter>
            <div>
                <h1>Search movies</h1>
                <Search onSearch={setMovies} />

                <Routes>
                    <Route path="/" element={<MovieList movies={movies} />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path={"*"+"NotFound"} element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
