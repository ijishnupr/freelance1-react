import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.webp'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer(){

    return <Fragment>

        
            <footer
                className="text-center text-lg-start text-white"
                style={{backgroundColor: 'black'}}
                >
                <div className="container p-4 pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    <img style={{width:'100px'}} src={logo} alt='logo'/>
                                </h6>
                                
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                           

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    <Link className="text-white">About us</Link>
                                </p>
                                <p>
                                    <Link className="text-white">Privacy policy</Link>
                                </p>
                                <p>
                                    <Link className="text-white">Terms and condition</Link>
                                </p>
                                <p>
                                    <Link className="text-white">Help</Link>
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                
                            </div>
                        </div>
                    </section>

                    

                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                

                                
                              
            <Link
              to="https://www.instagram.com/highonbuzz"
              className="btn btn-outline-light text-white btn-floating m-1"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              to="http://facebook.com/highonbuzz"
              className="btn btn-outline-light text-white btn-floating m-1"
              role="button"
            >
              <i className="fab fa-facebook"></i>
            </Link>

            <Link
              to="#"
              className="btn btn-outline-light text-white btn-floating m-1"
              role="button"
            >
              <i className="fab fa-google"></i>
            </Link>
                            </div>
                        </section>
                </div>
            </footer>
        
    
                </Fragment>
}