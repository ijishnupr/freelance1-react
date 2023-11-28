import { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Signup_B() {
    let [email, setemail] = useState('');
    let [firstname, setfirstname] = useState('');
    let [lname, setlname] = useState('');
    let [mobile, setmobile] = useState('');
    let [babydob, setbabydob] = useState('');
    let [babygender, setbabygender] = useState('');
    let [img, setimg] = useState()
    let [password, setpassword] = useState('');
    let navigate=useNavigate();
    function loginclick(e) {
        console.log(babydob)
        e.preventDefault()
        var data = new FormData();
  data.append('email', email);
  data.append('firstname', firstname);
  data.append('lastname', lname);
  data.append('mobile', mobile);
  data.append('babydob', formatDate(babydob));
  data.append('babyGender', babygender);
  data.append('fcm_token', 'none');
  data.append('password', password);
  data.append('profile_img', img);
        axios.post('http://127.0.0.1:8000/register/',data).then((res)=>{
            navigate('/');console.log('done',res)
        }).catch((err)=>alert('notdone',err))
    }
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Month is 0-based, so add 1
        const year = date.getFullYear();
      
        // Ensure that day and month have two digits
        const formattedDay = day.toString().padStart(2, '0');
        const formattedMonth = month.toString().padStart(2, '0');
      
        return `${formattedDay}-${formattedMonth}-${year}`;
      }
    return <>
        <div className="contianer-fluid">
            <div className="row">
                <div className="col ">
                    <div className='row'>

                        <div className="col col-sm-6 col-md-6 mx-auto d-block bg-light rounded" style={{ marginTop: '130px' }}  >

                            <form>
                                

                                <h3 className="mt-4">Signup</h3>
                                <div class="row mt-5">
                                    <div class="col">
                                        <input type="text" className="form-control" placeholder="First name" value={firstname} onChange={(event)=>setfirstname(event.target.value)}></input>
                                    </div>
                                    <div class="col">
                                        <input type="text" className="form-control" placeholder="Last name" value={lname} onChange={(evt)=>setlname(evt.target.value)}></input>
                                    </div>
                                </div>
                                
                                <input className="form-control mt-3" value={email} type="email" onChange={(event) => setemail(event.target.value)} placeholder="email"></input>
                                <input className="form-control mt-3" placeholder="mobile" value={mobile} onChange={(event) => setmobile(event.target.value)} type='mobile' ></input>
                                
                               
                    
                               
                                <input className="form-control mt-3" placeholder="password" value={password} onChange={(event) => setpassword(event.target.value)} ></input>
                                <button className="btn btn-success mx-auto d-block mt-4 mb-4" onClick={loginclick}>Signup</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-1 mx-auto d-block">
                            <Link className="btn btn-outline-dark" to={'/'}>Login</Link>

                        </div>
                    </div>
                </div>

                <div className="col d-none d-md-block login bg-info">
                    <h3 className='brandname text-white'>HighonBuzz</h3>
                </div>
            </div>
        </div>

    </>
}