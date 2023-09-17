import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import menu from '../assets/img/Menu.svg';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(

        <div>
            <header>
          <nav className={`navbar navbar-expand-lg fixed-top p-3 ${scrolling ? 'bg-white' : '.navbar.bg-white'}`}>
            <div className="container">
                <Link to="" className="navbar-brand fw-bold"> <img src={logo} alt="logo" className='w-25 '/>&nbsp; MovieBox  </Link>
                <div className="search d-lg-flex d-none me-auto ms-auto" role="search">
                <input className="  " type="search" placeholder="What do you want to watch?" aria-label="Search"/>
                 <i className="bi bi-search"></i>
                </div>
                    <ul className="ms-auto d-lg-flex d-none">
                      <li className="nav-item">
                    <Link to="" className="nav-link text-white" href="#">Sign in</Link>
                    </li>
                     <li className="nav-item">
                    <Link to="" className="nav-link ms-5" href="#"><img className='w-75' src={menu} /></Link >
                    </li>
                        </ul>

            </div>
            </nav>
            </header>
        </div>
    );
}

export default Navbar;
    