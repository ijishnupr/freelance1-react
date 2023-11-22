import { Slide } from "react-awesome-reveal";
export default function Hero() {

    return <>
        <div className="container-fluid mt-3">

            <div className="row">
                <div className="col d-none d-md-block">

                    <img style={{ width: '700px' }} src="https://i.pinimg.com/originals/6d/12/aa/6d12aaf79e6e63db76eb5e04cc7f4852.gif" alt="team" />
                </div>
                <div className="col-12 col-md-6">
                    <Slide>
                        <div style={style.box}>

                    <h1 className="text-center" style={{ fontWeight: 'bold', marginTop: '25px' }}>Get To Know Us</h1>
                    <p className="text-center mt-5 px-5"> We specialize in connecting influencers with brands, creating impactful partnerships that drive results. Our team maximizes
                        the potential of
                        influencers and brands, working closely with a diverse roster of talented individuals across various niches and platforms</p>
                    <p className="text-center px-5">At Highonbuzz, we understand the power of social media influencers and harness it for successful brand collaborations.</p>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                        <ol className="carousel-indicators">

                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner" style={{ height: '470px' }}>
                            <div className="carousel-item active">
                                <img className="d-block w-100" src='https://static.wixstatic.com/media/11062b_b7d1c200ebaa4e33830bca694dba808f~mv2.jpg/v1/fill/w_1225,h_656,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_b7d1c200ebaa4e33830bca694dba808f~mv2.jpg' alt="First slide" />

                            </div>


                            <div className="carousel-item">
                                <img className="d-block w-100" src='https://static.wixstatic.com/media/fdb2a7_82b0378dfff34c74bdf5ec34f9757f1e~mv2.jpg/v1/fill/w_1225,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fdb2a7_82b0378dfff34c74bdf5ec34f9757f1e~mv2.jpg' alt="second slide" />



                            </div>

                            <div className="carousel-item ">
                                <img className="d-block w-100" src='https://static.wixstatic.com/media/fdb2a7_c5374817d45647059d43cdfbf06070c1~mv2.jpg/v1/fill/w_1225,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fdb2a7_c5374817d45647059d43cdfbf06070c1~mv2.jpg' alt="third slide" />



                            </div>

                            <div className="carousel-item ">
                                <img className="d-block w-100" src='https://static.wixstatic.com/media/11062b_d4b001695a67432f84fad8c7875bf03e~mv2.jpeg/v1/fill/w_1225,h_656,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_d4b001695a67432f84fad8c7875bf03e~mv2.jpeg' alt="Fourth slide" />



                            </div>

                            <div className="carousel-item">
                                <img className="d-block w-100" src='https://static.wixstatic.com/media/0f9c259603a54396aa4ce6e5908a4efd.jpg/v1/fill/w_1225,h_656,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/0f9c259603a54396aa4ce6e5908a4efd.jpg' alt="Fifth slide" />



                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </>
}
const style={
    box:{
        border:'1px solid grey',
        margin:'50px',
        transition:'boxShadow .3s',
        boxShadow:'0 0 11px rgba(33,33,33,.4)',
        borderRadius:'15px',
        backgroundColor:'rgba(173, 216, 230, 0.7)',
        
    }
}