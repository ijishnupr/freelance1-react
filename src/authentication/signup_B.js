import { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Slide } from 'react-awesome-reveal';
import imgg from '../img/login.png'
export default function Signup_B() {
    let [email, setemail] = useState('');
    let [bname, setbname] = useState('');
    let [firstname, setfirstname] = useState('');
    let [lname, setlname] = useState('');
    let [brandname, setbrandname] = useState('');
    let [b_url, setb_url] = useState('')
    let [mobile, setmobile] = useState('');
    let [otp, setotp] = useState('');
    let [img, setimg] = useState()
    let [password, setpassword] = useState('');
    let [cpassword, setcpassword] = useState('');
    let [salert, setsalert] = useState(false);
    let [ealert, setealert] = useState(false);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    function loginclick(e) {
        e.preventDefault()
        var data = new FormData();
        data.append('email', email);
        data.append('firstname', firstname);
        data.append('lastname', lname);
        data.append('mobile', mobile);
        data.append('fcm_token', 'none');
        data.append('otp', otp);
        data.append('brand_name', bname);
        data.append('business_name_url', b_url);
        data.append('password', password);
        data.append('profile_img', img);
        axios.post('brand-register/', data).then((res) => {
            axios.post('brand-login/', data).then((res) => {
                window.localStorage.setItem('brandtock', res.data.token)
                navigate('/signup_b2');
            })

        }).catch((err) => alert('notdone', err))
    }

    function verify(e) {
        e.preventDefault();


        const data = new FormData();
        data.append('mobile', mobile);

        axios.post('send-otp/', data)
            .then(() => {
                console.log('done');
            })
            .catch(error => {
                console.error('Error:', error);

            });
    }
    return <>
        <div className="contianer-fluid">
            <div className="row">
                <div className="col ">
                        <Slide direction='right'>
                    <div className='row'>

                        <div className="col col-sm-6 col-md-8 mx-auto d-block rounded" style={{ marginTop: '130px' }}  >
                            {/* Success Alert */}
                            {salert && (
                                <Alert variant="success" show fade>
                                    Successful! <span onClick={() => setsalert(false)} style={{ cursor: 'pointer' }}> &times;</span> {/* Customize this message */}
                                </Alert>
                            )}

                            {/* Error Alert */}
                            {ealert && (
                                <Alert variant="danger" show fade >
                                    An error occurred! Please try again. <span style={{ cursor: 'pointer' }} onClick={() => setealert(false)}> &times;</span> {/* Customize this message */}
                                </Alert>)}
                            <form>


                                <h3 className="mt-4">Signup</h3>
                                <div className="row mt-5">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First name" value={firstname} onChange={(event) => setfirstname(event.target.value)}></input>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Last name" value={lname} onChange={(evt) => setlname(evt.target.value)}></input>
                                    </div>
                                </div>

                                <input className="form-control mt-3" value={bname} type="text" onChange={(event) => setbname(event.target.value)} placeholder="brand name"></input>
                                <input className="form-control mt-3" value={email} type="email" onChange={(event) => setemail(event.target.value)} placeholder="email"></input>
                                <div className="input-group mt-3">
                                    <input type="text" className="form-control" value={mobile} onChange={(event) => setmobile(event.target.value)} placeholder="mobile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button onClick={() => verify()} className="input-group-text" id="basic-addon2">verify</button>
                                    </div>
                                </div>
                                <input className='form-control ' value={otp} type='number' onChange={(ent) => setotp(ent.target.value)} placeholder='otp' />




                                <input className="form-control mt-3" type='url' placeholder="url" value={b_url} onChange={(event) => setb_url(event.target.value)} ></input>
                                <input className="form-control mt-3" type='password' placeholder="password" value={password} onChange={(event) => setpassword(event.target.value)} ></input>
                                <input className="form-control mt-3" type='password' placeholder="confirm password" value={cpassword} onChange={(event) => setcpassword(event.target.value)} ></input>
                                <button className="btn btn-block mx-auto text-white d-block mt-4 mb-4" style={{ background: '#7071E8', borderRadius: '20px' }} onClick={loginclick}>Signup</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-1 mx-auto d-block">
                            <Link className="btn btn-outline-dark" to={'/login_brand'}>Login</Link>

                        </div>
                    </div>
                        </Slide>
                </div>

                <div className="col col-8 d-none d-md-block login">
                    <h2 style={{ textAlign: 'center', color: 'white', marginTop: '100px' }} >Welcome To High On Buzz</h2>
                    <img className='signup' src={imgg} alt='img' />

                </div>
            </div>
        </div>

    </>
}