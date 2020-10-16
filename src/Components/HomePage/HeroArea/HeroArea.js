import React from 'react';
import './HeroArea.css'
import img1 from '../../../images/logos/Frame.png'
const HeroArea = () => {
    return (
        <div className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="hero-text">
                            <h1>Let’s Grow Your  <br/> Brand To The <br/> Next Level</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
                            <button className="btn-brand">Hire Us</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='w-100' src={img1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;