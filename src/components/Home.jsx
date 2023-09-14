import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import imdb from "../assets/img/imdb.svg";
import tom from "../assets/img/tomato.svg";


function Home() {
  const token = 
  const [movies, setMovies] = useState([])

  const url = '';
  const config = {
    method: 'GET',
    headers: {
      'Authorization': ``,
      'Content-Type': 'application/json'
    }
  }

  useEffect(() => {
    fetch(url, config)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
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

    {/* featured section */}
        <section className='vh-100 '>
          <div className='d-flex justify-content-between p-5'>
            <div className="">
            <h3 className='display-4 fw-bold'>Featured Movies</h3>
            </div>
            <div className="">
            <div className='text-danger h5'>See more </div>
            </div>
          </div>

          {/* List of movies */}
          <div className='col-lg-4 col-md-12'>

            {
              movies.slice(0, 10).map((movie, i) => (
                <Link to={`/movies/${movie.id}`} className='' key={i} data-testid='movie-card'>
                  <img data-testid="movie-poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie-poster' className=' w-100'/>
                  <div>USA <span data-testid="movie-release-date">{movie.release_date}</span></div>
                  <div className='font-bold h3' data-testid='movie-title'>{movie.title}</div>
                  <div>Action, Horror, Adventure</div>
                </Link>
              ))
            }
            
          </div>
        </section>
</div>
  );
}

export default Home;
