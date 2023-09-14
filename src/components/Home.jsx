

function Home() {
  return (
<div>   
    <section id="hero" className="hero vh-100">
    <div className="col-lg-6 col-md-12 p-5 pt-5 align-items-center d-block justify-content-center">
     <h1 className="text-white display-5 fw-bold ">John Wick 3 : <br></br> Parabellum</h1>

     <p className="text-start text-white">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
     <div className="btn-cmp">
        <button className="bg-danger text-white p-3 fw-bold  text-capitalize">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="play">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
              </svg>
      &nbsp;watch trailer</button>
      </div>
    </div>
    </section>
</div>
  );
}

export default Home;
