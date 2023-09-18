import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    // Define headers for the API request
    const headers = {
      Authorization: `Bearer ${apiKey}`, // If your API requires an Authorization header
      // Other headers if needed
    };

    fetch(url, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const runtimeMinutes = movie.runtime;
  const runtimeText = `${runtimeMinutes}m`;

  return (
    <main className="container mt-5 pt-5 py-5">
      <div>
        <img
          src={
            movie.backdrop_path &&
            `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
          }
          alt=""
          className="rounded-xl img-fluid"
        />
        <div className="d-flex gap-2 my-3 flex-wrap">
          <div className="font-weight-bold" data-testid="movie-title">
            {movie.title}
          </div>
          <span>◾</span>
          <div className="font-weight-bold" data-testid="movie-release-date">
            {movie.release_date}
          </div>
          <span>◾</span>
          <div className="font-weight-bold mr-4">
            <span data-testid="movie-runtime">{runtimeText}</span>
          </div>
          {movie.genres.map((item) => (
            <div
              key={item.id}
              className="text-sm border border-danger text-danger py-1 px-2 font-weight-bold rounded-xl"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <p data-testid="movie-overview" className="my-2">
        {movie.overview}
      </p>
      <div className="mt-2">
        <div>
          <span className="font-weight-bold text-danger">
            Production Company:
          </span>
          {movie.production_companies?.map((com) => (
            <div className="d-flex gap-2" key={com.id}>
              <img
                className="img-fluid w-50"
                src={`https://image.tmdb.org/t/p/original${com.logo_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="mt-2">
          <span className="fw-bold text-danger">
            Production Countries:
          </span>
          {movie.production_countries?.map((com, i) => (
            <div className="d-flex gap-2" key={i}>
              {com.name}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
