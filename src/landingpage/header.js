import { Link } from 'react-router-dom';
import logo from '../img/logo.webp'
import { useState } from 'react';
import I_or_B from '../authentication/influencer_or_brand';
import I_or_B_signup from '../authentication/i_or_b_signup';
import './header.css';
export default function Header() {
  const [login, setlogin] = useState(false);
  const [signup, setsignup] = useState(false);
  return <>
    <nav className="navbar navbar-expand-lg navbar-light"  >
      <Link className="navbar-brand" href="/"><img onClick={() => { window.location.href = '/' }} style={{ width: '100%', marginTop: '20px' }} src={logo} alt='logo of website' /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ">
          {/* <li className='nav-item '>
        <Link style={{textDecoration:'none'}} className='nav-link text-light mr-3' to={'/'}></Link>
      </li> */}
          
          <li className='nav-item '>
            <Link  className='nav-link txt  mr-5' to={'/aboutus'}>About us</Link>
          </li>
          {/* <li className='nav-item '>
        <Link style={{textDecoration:'none'}} className='nav-link text-light mr-5' to={'/'}>Influencers</Link>
      </li> */}
          <li className='nav-item '>
            <Link  className='nav-link txt mr-5' to={'/'}>Pricing</Link>
          </li>
          <li className='nav-item '>
        <Link style={{textDecoration:'none'}} className='nav-link text-light mr-5' to={'/contactus'}>Contact us</Link>
      </li>
      
          <li className="nav-item float-right active">
            <button className="nav-link btn btn-outline-danger text-light b mr-5 mt-1 p-1" style={style.btn} href="#">Request Demo</button>
          </li>
          <li className="nav-item float-right active">
            <button className="nav-link text-white btn btn-info b mr-5 mt-1 p-1" style={style.btn} onClick={() => setsignup(true)} >Signup</button>
          </li>
          <li className="nav-item">
            <button style={style.btn} className="nav-link b btn btn-outline-success mr-5 mt-1 p-1  text-white" onClick={() => setlogin(true)} >login</button>
          </li>

        </ul>
      </div>
    </nav>
    {login ? <I_or_B/>: null}
    {signup ? <I_or_B_signup/> : null}
  </>

}
const style = {
  btn: {
    borderRadius: '16px',
    width: '150px'
  }
}


