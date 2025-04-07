import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&i=${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) return <p className="loading">Загрузка...</p>;

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p><strong>Жанр:</strong> {movie.Genre}</p>
      <p><strong>Режиссер:</strong> {movie.Director}</p>
      <p><strong>Жыл:</strong> {movie.Year}</p>
      <Link to="/">Артқа</Link>
    </div>
  );
}