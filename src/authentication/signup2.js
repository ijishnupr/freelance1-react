import { useState } from "react";
import './login.css';
import axios from "axios";
import { Slide } from "react-awesome-reveal";

export default function Signup2() {
    const token = window.localStorage.getItem('influencertock')
    const headers = {
        Authorization: `token ` + token,
    };
    console.log(headers);

    const[iurl,setiurl]=useState('');
    const[cinsta,setcinsta]=useState('');
    const[yurl,setyurl]=useState('');
    const[cyout,setcyout]=useState('');
    
    // State variables for form fields
 
    // Handle form submission
    const handleSubmit = (e) => {

        const data = new FormData();
        data.append('instagram_profile',iurl);
        data.append('instagram_earnings',cinsta);
        data.append('youtube_profile',yurl);
        data.append('youtube_earnings',cyout);
            console.log(data);
        axios.patch('update-influencer-profile-details/', data, { headers }).then((err) => { alert('done') })
            .catch((err) => { console.log(err); alert('notdone') })
    };


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Slide direction="right" >
                        <div className='row'>

                            <div className="col col-sm-6 col-md-6 mx-auto d-block bg-light rounded" style={{ marginTop: '130px' }}>
                                <h3 className="mt-3 mb-3">Profile info</h3>
                                <form>
                                <input className="form-control mt-3" value={iurl} type="url" onChange={(event) => setiurl(event.target.value)} placeholder="instagram url"></input>
                                <input className="form-control mt-3" value={cinsta} type="number" onChange={(event) => setcinsta(event.target.value)} placeholder="instagram income"></input>
                                <input className="form-control mt-3" value={yurl} type="url" onChange={(event) => setyurl(event.target.value)} placeholder="youtube url"></input>
                                <input className="form-control mt-3" value={cyout} type="number" onChange={(event) => setcyout(event.target.value)} placeholder="youtube income"></input>
                                    <button onClick={(e) => { handleSubmit() }} className="btn btn-primary mt-3 mb-4">Next</button>
                                </form>
                            </div>
                        </div>
                    </Slide>

                </div>
                <div className="col d-none d-md-block bg-info login">
                    <h3 className='brandname text-white'>HighonBuzz</h3>
                </div>
            </div>
        </div>
    );
}
