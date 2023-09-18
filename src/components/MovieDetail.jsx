import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const formatDateToUTCString = (dateString) => {
  const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
  const dateInLocalTime = new Date(dateString);
  const dateInUTC = new Date(dateInLocalTime.getTime() + dateInLocalTime.getTimezoneOffset() * 60000);
  return dateInUTC.toLocaleDateString('en-US', options);
};

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    };

    fetch(url, config)
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

  // Split the runtime into separate elements
  const runtimeMinutes = movie.runtime;
  const runtimeText = `${runtimeMinutes}`;

  return (
    <main className="container mt-5 pt-5 py-5" data-testid="movie-card">
      <div>
        <img
          src={
            movie.backdrop_path &&
            `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
          }
          alt=""
          className="rounded-xl img-fluid"
          data-testid="movie-poster"
        />
        <div className="d-flex gap-2 my-3 flex-wrap">
          <div className="font-weight-bold" data-testid="movie-title">
            {movie.title}
          </div>
          <span>◾</span>
          <div className="font-weight-bold" data-testid="movie-release-date">
            {formatDateToUTCString(movie.release_date)}
          </div>
          <span>◾</span>
          <div className="font-weight-bold mr-4">
            <span data-testid="movie-runtime">{runtimeText}<small>min</small></span>
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
          {movie.production_companies?.map((com, i) => (
            <div className="d-flex gap-2" key={i}>
              <img
                className="img-fluid w-50"
                data-testid={`production-company-${i}`}
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
