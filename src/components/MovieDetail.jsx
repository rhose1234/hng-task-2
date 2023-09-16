import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function MovieDetail() {
  const res = useLoaderData();
  console.log(res);

  return (
    <main className="container mt-4">
      <div>
        <img
          src={
            res.backdrop_path &&
            `https://image.tmdb.org/t/p/original${res.backdrop_path}`
          }
          alt=""
          className="rounded-xl img-fluid"
        />
        <div className="d-flex gap-2 my-3 flex-wrap">
          <div className="font-weight-bold" data-testid="movie-title">
            {res.title}
          </div>
          <span>◾</span>
          <div className="font-weight-bold" data-testid="movie-release-date">
            {res.release_date}
          </div>
          <span>◾</span>
          <div className="font-weight-bold mr-4">
            <span data-testid="movie-runtime">{res.runtime}</span>m
          </div>
          {res.genres.map((item) => (
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
        {res.overview}
      </p>
      <div className="mt-2">
        <div>
          <span className="font-weight-bold text-danger">
            Production Company:
          </span>
          {res.production_companies?.map((com) => (
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
          {res.production_countries?.map((com, i) => (
            <div className="d-flex gap-2" key={i}>
              {com.name}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function MovieLoader({ params }) {
  try {
    const { id } = params;
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const apiKey = import.meta.env.VITE_API_KEY;
    const config = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(url, config);

    if (!res.ok) {
      throw new Error(`Network response not ok, status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('MovieLoader error:', error);
    throw error; // Rethrow the error so it can be handled in the component
  }
}
