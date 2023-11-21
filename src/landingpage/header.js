import { Link } from 'react-router-dom';
import logo from '../img/logo.webp'
import './landing.css'
export default function Header(){

    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="#"><img style={{width:'70%'}} src={logo} alt='logo of website'/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item float-right active">
        <Link className="nav-link button"  href="#">Signup <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link button"  href="#">Login</Link>
      </li>
      
    </ul>
  </div>
</nav>
    </>

}


