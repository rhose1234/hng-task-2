import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import imdb from "../assets/img/imdb.svg";
import tom from "../assets/img/tomato.svg";



function Home() {
  const apiKey = import.meta.env.API_KEY
  // const appName = import.meta.env.VITE_APP_NAME;
  const [movies, setMovies]=useState([])

  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const config = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  }
  
  useEffect(() => {
    fetch(url, config)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.results);
      setMovies(data.results)
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }, [])

  return (
<div>   
    <section id="hero" className="hero vh-100 ">
      <div className="container">
    <div className=" col-lg-6 col-md-12  pt-5 align-items-center d-block justify-content-center">
     <h1 className="text-white display-4 fw-bold ">John Wick 3 : <br></br> Parabellum</h1>
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

        <section className='pt-5 pb-5'>
          <div className='d-flex justify-content-between p-5'>
            <div className="">
            <h3 className='display-4 fw-bold'>Featured Movies</h3>
            </div>
            <div className="">
            <div className='text-danger h5'>See more </div>
            </div>
          </div>

        
          <div className=' container col movie-card'>
            <div className="row gx-5">

            {
              movies.slice(0, 20).map((movie, i) => (
                <Link to={`/movies/${movie.id}`} className='mt-5 w-25' key={i} data-testid='movie-box'>
                  <img data-testid="movie-img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie-img' className=' w-100'/>
                  <div className=' text-secondary fw-bold mt-2 mb-3'>USA <span data-testid="release-date">{movie.release_date}</span></div>
                  <div className='font-bold h5 text-dark mt-2 mb-3' data-testid='title'>{movie.title}</div>
                  <div className="d-flex justify-content-between mt-3 mb-3 fw-normal">
      <div className="rating1 text-dark me-3">

        <small className='text-dark fw-normal'> <img src={imdb} alt='rating 1' className='w-25'/>&nbsp;&nbsp;86.0/100</small>
       
      </div> 
      <div className="rating2">
       <small className='text-dark fw-normal'> <img src={tom} alt='rating2' className='w-25 text-dark'/>&nbsp;&nbsp;97%</small>
       </div>
     </div>
                  <small className='text-secondary fw-normal mt-2 mb-3'>Action, Horror, Adventure</small>
                </Link>
              ))
            }
            </div>
          </div>
        </section>

       
</div>
  );
}

export default Home;