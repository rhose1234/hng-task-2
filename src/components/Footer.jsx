import { Link } from 'react-router-dom';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import instagram from '../assets/img/instagram.svg';
import youtube from '../assets/img/youtube.svg';

function Footer() {

    return(

        <>
        <footer className='bg-white p-5 mt-5 pt-5'>
     <div className=" text-center">
  <div className="card-header">
    
  </div>
  <div className="card-body">
    <div className="socials d-block mb-3">
        <Link to=""><img src={facebook} className='w-25' /></Link>
        <Link to=""><img src={twitter} className='w-25'/></Link>
        <Link to=""><img src={instagram} className='w-25'/></Link>
        <Link to=""><img src={youtube} className='w-25' /></Link>
    </div>

<div className="container">
    <div className="text align-item-center justify-content-center row mt-3 mb-3 ">
<h5 className="footer-link col-12">Condition Of Use </h5>
<h5 className="footer-link col-12">Privacy & Policy </h5>
<h5 className="footer-link col-12">Press Room</h5>
    </div>
    </div>
    
    <div className='h6'>&copy; 2023 MovieBox by Marvelous💖</div>
    
  </div>
</div>
        </footer>
        </>
    );
}

export default Footer;
    