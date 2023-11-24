import Footer from "../landingpage/footer";
import Header from "../landingpage/header";
import about from '../img/aboutus.gif'
import programmer from '../img/programmer.gif'
import './about.css'
export default function About() {


    return <>
        <Header />
        <div className="container-fluid" style={{ background: '#33D8E3' }}>
            <img style={{ width: '100%' }} src={about} alt="about us header" />
            <div className="row">
                <div className="col">
                    <img className="images" src={programmer} alt="gif image"/>
                </div>
                <div className="col col-12 col-md-7  text">
                    <h2 >Who We Are</h2>
                    <p className="mt-5">HighonBuzz is an upcoming agency that specializes in connecting influencers with brands and facilitating successful partnerships. Our team is dedicated to maximizing the potential of both influencers and brands, creating impactful collaborations that drive results.

​

At Highonbuzz, we understand the power and influence that social media influencers possess. We work closely with a diverse roster of talented influencers across various niches and platforms.Our team carefully selects influencers based on their unique brand identity, audience demographics, and engagement metrics to ensure the perfect match for brand collaborations</p>
                </div>
            </div>
        </div>
        <Footer />

    </>
}