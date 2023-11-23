import Curosal from "./curosal";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Projects from "./projects";
import Testimonial from "./testimonial";

export default function Landingpage(){

    return <>
    <div style={{background:'#F0F3F7'}}>

    <Header />
    <Curosal/>
  
    <Hero/>
    <Projects/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
}

