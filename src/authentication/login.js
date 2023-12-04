import { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login(){

let [email,setemail]=useState('');
let [password,setpassword]=useState('');
let navigate=useNavigate()
let data={
    email:email,
    password:password,
}

function loginclick(e){
    
axios.post('influencer-login/',data).then((res)=>{
    window.localStorage.setItem('influencertock',res.data)
}).catch((res)=>console.log(res))
}
return <div className='container-fluid login'>
     <div className="row">
                <div className="col-12 col-sm-7 col-md-3 mx-auto d-block bg-light rounded" style={{ marginTop: '200px' }}  >

                    <form>
                        <h3 className="mt-4">Log In</h3>
                        <input className="form-control mt-5" value={email} type="email" onChange={(event) => setemail(event.target.value)} placeholder="email"></input>
                        <input className="form-control mt-3" placeholder="password" value={password} onChange={(event) => setpassword(event.target.value)} ></input>
                        <button className="btn btn-success mx-auto d-block mt-4 mb-4" onClick={loginclick}>login</button>
                    </form>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-1 mx-auto d-block">
                    <Link className="btn btn-outline-light" to={'/Signup'}>signup</Link>

                </div>
            </div>
</div>
}
export default Login