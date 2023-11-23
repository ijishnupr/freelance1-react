import Curosal from "./curosal";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Testimonial from "./testimonial";

export default function Landingpage(){

    return <>
    
    <Header />
    <Curosal/>
  
    <Hero/>
<br></br><br></br>
    <h1 style={{color:'yellow'}}>display content and images related to the objectives / mission of website</h1>
   <br></br><br></br>
    <Testimonial/>
    <Footer/>
    </>
}

