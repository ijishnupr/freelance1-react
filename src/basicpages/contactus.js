import Header from '../landingpage/header'
import './about.css'
import contact from '../img/contact.jpg';
import mail from '../img/mail2.gif'
import Footer from '../landingpage/footer';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export default function Contactus(){
    const [state, handleSubmit] = useForm("xnqknoqe");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
return <>

<Header/>
<div className='container-fluid' style={{background:'#0B82DC'}} >
    <img src={contact} style={{width:'100%', borderBottom:'1px solid white'}} />
<div className='row'>
    <div className='col'>

    <img className='images mt-5 mb-3' src={mail} alt='postman image'/>
    </div>
    <div className='col col-12 col-md-7  text'>
        <p className='mr-5 text-warning'>GET IN TOUCH</p><br></br>
        <h1>We Are Here For You</h1>
        <form onSubmit={handleSubmit}>
          <div className='contdiv'>

            <input type="text" name='' className="form-control mt-5" placeholder="Name"></input>
            <input type="email" name='email' className="form-control mt-5" placeholder="Email"></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea name='message' className="form-control mt-5 mb-5" placeholder="Your message.."></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type='submit' class=" btn btn-outline-light mx-auto d-block" role="button">send</button>

          </div>
        </form>
      
    </div>
</div>

</div>
<Footer/>
</>

}