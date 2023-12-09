import { useState } from "react";
import { useSelector } from "react-redux";
import './login.css';
import { Link, } from "react-router-dom";
import axios from "axios";
import { Slide } from "react-awesome-reveal";
import imgg from '../img/login.png';
export default function Signup_B2() {
    const token = window.localStorage.getItem('brandtock')
    const headers = {
        Authorization: `token ` + token,
    };
    console.log(headers);


    // State variables for form fields
    const [brandDescription, setBrandDescription] = useState('');
    const [yearsEstablished, setYearsEstablished] = useState('');
    const [numOfProducts, setNumOfProducts] = useState('');
    const [servicesDescription, setServicesDescription] = useState('');
    const [profilePictureFile, setProfilePictureFile] = useState(null);
    const [brandImagesFile, setBrandImagesFile] = useState(null);
    // Handle form submission
    const handleSubmit = (e) => {

        const data = new FormData();
        data.append('profle_picture', profilePictureFile);
        data.append('brand_description', brandDescription);
        data.append('about_services', servicesDescription);
        data.append('years_of_establishment', yearsEstablished);
        data.append('number_of_products', numOfProducts);
        data.append('brand_images', brandImagesFile);

        axios.patch('update-brand-profile-details/', data, { headers }).then((err) => { alert('done') })
            .catch((err) => { console.log(err); alert('notdone') })
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setProfilePictureFile(file);
    };

    const handleBrandImagesChange = (e) => {
        const file = e.target.files[0];
        setBrandImagesFile(file);
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                        <Slide direction="right" >
                    <div className='row'>

                        <div className="col col-sm-6 col-md-8 mx-auto d-block rounded" style={{ marginTop: '130px' }}>
                            <h3 className="mt-3 mb-3">Profile info</h3>
                            <form>
                                {/* Upload profile picture */}
                                <div className="mb-3">
                                    <label htmlFor="profilePicture" className="form-label">Upload profile picture</label>
                                    <input type="file" className="form-control" id="profilePicture" onChange={(e) => handleProfilePictureChange(e)} />
                                </div>

                                {/* Add images related to their brand */}
                                <div className="mb-3">
                                    <label htmlFor="brandImages" className="form-label">Add images related to brand</label>
                                    <input type="file" className="form-control" id="brandImages" onChange={(e) => handleBrandImagesChange(e)} />
                                </div>

                                {/* Enter brand description */}
                                <div className="mb-3">
                                    <label htmlFor="brandDescription" className="form-label">Enter brand description</label>
                                    <textarea className="form-control" id="brandDescription" rows="3" onChange={(e) => setBrandDescription(e.target.value)}></textarea>
                                </div>

                                {/* Enter years of establishment */}
                                <div className="mb-3">
                                    <label htmlFor="yearsEstablished" className="form-label">Enter years of establishment</label>
                                    <input type="text" className="form-control" id="yearsEstablished" onChange={(e) => setYearsEstablished(e.target.value)} />
                                </div>

                                {/* Enter number of products */}
                                <div className="mb-3">
                                    <label htmlFor="numOfProducts" className="form-label">Enter number of products</label>
                                    <input type="text" className="form-control" id="numOfProducts" onChange={(e) => setNumOfProducts(e.target.value)} />
                                </div>

                                {/* Enter about their services */}
                                <div className="mb-3">
                                    <label htmlFor="servicesDescription" className="form-label">Enter about services</label>
                                    <textarea className="form-control" id="servicesDescription" rows="3" onChange={(e) => setServicesDescription(e.target.value)}></textarea>
                                </div>

                                {/* Next button */}
                                <button onClick={(e) => { handleSubmit() }} className="btn btn-block text-white" style={{background:'#7071E8',borderRadius:'20px'}} >Next</button>
                            </form>
                        </div>
                    </div>
                        </Slide>

                </div>
                <div className="col col-8 d-none d-md-block login">
                    <h2 style={{ textAlign: 'center', color: 'white', marginTop: '100px' }} >Welcome To High On Buzz</h2>
                    <img className='signup' src={imgg} alt='img' />

                </div>
            </div>
        </div>
    );
}
