import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imdb from '../assets/img/imdb.svg';
import tom from '../assets/img/tomato.svg';



function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);

  const toggleFavorite = (movieId) => {
  setMovies((prevMovies) =>
    prevMovies.map((movie) =>
      movie.id === movieId
        ? { ...movie, isFavorite: !movie.isFavorite }
        : movie
    )
  );
};


  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    fetch(url, config)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const moviesWithFavorites = data.results.map((movie) => ({
        ...movie,
        isFavorite: false,
      }));
      setMovies(moviesWithFavorites);
      console.log(data.results);
        setMovies(data.results);
    })
       
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <div>
     <section id="hero" className="hero vh-100 ">
      <div className="container ">
    <div className=" col-lg-6 col-md-12 d-block pt-5 align-item-center d-block justify-content-center">
     <h1 className="text-white display-4 fw-bold pt-5 mt-5">John Wick 3 : <br></br> Parabellum</h1>
     <div className="d-flex mt-3 mb-3 fw-normal">
      <div className="rating1">

        <small> <img src={imdb} alt='rating 1' className='w-25'/>&nbsp;&nbsp;86.0/100</small>
       
      </div> &nbsp; &nbsp;
      <div className="rating2">
       <small> <img src={tom} alt='rating2' className='w-25'/>&nbsp;&nbsp;97%</small>
       </div>
     </div>

     <p className="text-start text-white ">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
     <div className="btn-cmp mt-3">
        <button className="btn p-3 fw-bold  text-capitalize">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="play">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
              </svg>
      &nbsp;watch trailer
      </button>
      </div>
    </div>
    </div>
    </section>

      <section className="pt-5 pb-5">
        <div className="container d-flex justify-content-between ">
          <h5 className=" fw-bold">Featured Movies</h5>
          <div className="text-danger h6 ">See more</div>
        </div>

        <div className="container">
          <div className="row d-flex gx-5">
            {movies.slice(0, 10).map((movie, i) => (
              <Link  to={`/movies/${movie.id}`} key={i}
               className='mt-5 movie-box p-3 mb-5 col-lg-4 col-md-12'>
                  
              <div 
                className={`  ${
                  movie.isFavorite ? 'clicked' : ''
                }`}
                key={i}
              >
                <i
                  className={`bi bi-heart-fill position-absolute w-50 p-4 top-4 end-4 cursor-pointer ${
                    movie.isFavorite ? 'text-danger' : 'text-white'
                  }`}
                  onClick={() => toggleFavorite(movie.id)}
                ></i>

                <img
                  data-testid="movie-poster"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="movie-poster"
                  className="w-100"
                  
                />
                <div className="text-secondary fw-bold mt-2 mb-3">
                  USA <span data-testid="movie-release-date">{movie.release_date}</span>
                </div>
                <div className="font-bold h5 text-dark mt-2 mb-3" data-testid="movie-title">
                  {movie.title}
                </div>
                <div className="d-flex justify-content-between mt-3 mb-3 fw-normal">
                  <div className="rating1 text-dark">
                    <small className="text-dark fw-normal">
                      {' '}
                      <img src={imdb} alt="rating 1" className="w-25" />
                      &nbsp;&nbsp;86.0/100
                    </small>
                  </div>
                  <div className="rating2">
                    <small className="text-dark fw-normal">
                      {' '}
                      <img src={tom} alt="rating2" className="w-25 text-dark" />
                      &nbsp;&nbsp;97%
                    </small>
                  </div>
                </div>
                <small className="text-secondary fw-normal mt-2 mb-3">Action, Horror, Adventure</small>
                
             </div>
            
             </Link>
            ))}
            
          
          </div>
        </div>
          
      </section>
    </div>
  );
}

export default Home;
