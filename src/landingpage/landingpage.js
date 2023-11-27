import Curosal from "./curosal";
import Footer from "./footer";
import Hero from "./hero";
import Projects from "./projects";
import Testimonial from "./testimonial";

export default function Landingpage(){

    return <>
    <Curosal/>
    <div className="container-fluid" style={{background:'#F0F3F7'}}>

  
    <Hero/>
    <Projects/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
}

