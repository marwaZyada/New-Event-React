import React from 'react';
import img1 from '../../../assets/about-us/overview-img.jpg'

const AboutUs = () => {
    return (
        <div className='container'>
            <div className="about-us py-5">
                <div className="row align-items-center fs-4">
                    <div className="col-lg-6 col-sm-12">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est rem sequi officia consectetur asperiores tenetur.</h3>
                        <p className='text-secondary my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus repellat pariatur.</p>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus repellat pariatur.</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div>
                            <img src={img1} alt="about-us" className='w-100'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default AboutUs;
