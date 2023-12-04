import { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setbrand } from '../slice/brandslice';
export default function Signup() {
    let [email, setemail] = useState('');
    let [firstname, setfirstname] = useState('');
    let [lname, setlname] = useState('');
    let [mobile, setmobile] = useState('');
    let [age, setage] = useState('');
    let [cpassword, setcpassword] = useState('');
    let [password, setpassword] = useState('');
    let [otp, setotp] = useState('');
    let [salert, setsalert] = useState(false);
    let [ealert, setealert] = useState(false);
    let [location, setlocation] = useState('');
    let navigate = useNavigate();
    const dispatch = useDispatch();
    function loginclick(e) {
        e.preventDefault()
        var data = new FormData();
        data.append('email', email);
        data.append('firstname', firstname);
        data.append('lastname', lname);
        data.append('mobile', mobile);
        data.append('password', password);
        data.append('otp', otp);
        data.append('age', age);
        data.append('location', location)

        axios.post('register-client/', data).then((res) => {
            setsalert(true);
            
            axios.post('influencer-login/', data).then((res) => {
                dispatch(setbrand(res.data));
                window.localStorage.setItem('influencertock',res.data)
                navigate('/signup2');
            })


        }).catch(() => {
            setealert(true);
        })
    }

    function verify(e) {


        const data = new FormData();
        data.append('mobile', mobile);

        axios.post('send-otp/', data)
            .then(() => {
                console.log('done');
                alert('done');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while sending OTP');
            });

    }

    return <>
        <div className="contianer-fluid">

            <div className="row">

                <div className="col ">
                    <div className='row'>

                        <div className="col col-sm-6 col-md-6 mx-auto d-block bg-light rounded" style={{ marginTop: '130px' }}  >
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

                                <input className="form-control mt-3" value={email} type="email" onChange={(event) => setemail(event.target.value)} placeholder="email"></input>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" value={mobile} onChange={(event) => setmobile(event.target.value)} placeholder="mobile" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button onClick={() => verify()} className="input-group-text" id="basic-addon2">verify</button>
                                    </div>
                                </div>
                                <input className="form-control mt-3" placeholder="age" value={age} onChange={(event) => setage(event.target.value)} type='number' />




                                <input className="form-control mt-3" placeholder="location" value={location} onChange={(event) => setlocation(event.target.value)} ></input>
                                <input className="form-control mt-3" placeholder="password" value={password} onChange={(event) => setpassword(event.target.value)} ></input>
                                <input className="form-control mt-3" placeholder="confirm password" value={cpassword} onChange={(event) => setcpassword(event.target.value)} ></input>
                                <input className='form-control mt-2' placeholder='otp' value={otp} onChange={(evnt) => setotp(evnt.target.value)}></input>
                                <button className="btn btn-success mx-auto d-block mt-4 mb-4" onClick={loginclick}>Signup</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-1 mx-auto d-block">
                            <Link className="btn btn-outline-dark" to={'/login'}>Login</Link>

                        </div>
                    </div>
                </div>

                <div className="col d-none d-md-block login">
                    <h3 className='brandname text-white'>HighonBuzz</h3>
                </div>
            </div>

        </div>

    </>
}