import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import menu from '../assets/img/Menu.svg';

function Navbar() {

    return(

        <div>
            <header>
            <nav className="navbar navbar-expand-xl  fixed-top">
            <div className="container">
                <a className="navbar-brand fw-bold"> <img src={logo} alt="logo" className='w-25 '/>&nbsp; MovieBox  </a>
                <div className="search d-flex me-auto ms-auto" role="search">
                <input className="  " type="search" placeholder="What do you want to watch?" aria-label="Search"/>
                 <i class="bi bi-search"></i>
                </div>
                    <ul className="ms-auto d-flex">
                        <li className="nav-item">
                    <a className="nav-link text-white" href="#">Sign in</a>
                    </li>
                     <li className="nav-item">
                    <a className="nav-link ms-5" href="#"><img className='w-75' src={menu} /></a>
                    </li>
                        </ul>

            </div>
            </nav>
            </header>
        </div>
    );
}

export default Navbar;
    