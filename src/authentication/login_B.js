import { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from '../img/login.png';
import { Slide } from 'react-awesome-reveal';

function LoginB() {
    let [email, setemail] = useState('');
    let [password, setpassword] = useState('');
    let navigate = useNavigate()
    let data = {
        email: email,
        password: password,
    }

    function loginclick(e) {
        e.preventDefault()

        axios.post('brand-login/', data).then((res) => {

            window.localStorage.setItem('brandtock', res.data.token)
        }).catch((res) => console.log(res))
    }
    return <div className='container-fluid'>
        <div className='row'>
            <div className='col'>

                    <Slide direction='right'>
                <div className="row">

                    <div className="col-12 col-sm-7 col-md-8 mx-auto d-block bg-light rounded" style={{ marginTop: '230px' }}  >

                        <form>
                            <h3 className="mt-4">Log In</h3>
                            <input className="form-control mt-5" value={email} type="email" onChange={(event) => setemail(event.target.value)} placeholder="email"></input>
                            <input className="form-control mt-3" placeholder="password" value={password} onChange={(event) => setpassword(event.target.value)} ></input>
                            <button className="btn btn-block text-white mx-auto d-block mt-4 mb-4" style={{background:'#7071E8',borderRadius:'20px'}}  onClick={loginclick}>login</button>
                        </form>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-1 mx-auto d-block">
                        <Link className="btn btn-outline-success" to={'/signup_brand'}>signup</Link>

                    </div>
                </div>
                    </Slide>
            </div>

            <div className="col col-8 d-none d-md-block login">
                <h2 style={{ textAlign: 'center', color: 'white', marginTop: '100px' }} >Welcome To High On Buzz</h2>
                <img className='signup' src={img} alt='img' />

            </div>

        </div>
    </div>
}
export default LoginB