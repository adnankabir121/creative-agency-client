import React from 'react';
import img1 from '../../../images/logos/slack.png'
import img2 from '../../../images/logos/netflix.png'
import img3 from '../../../images/logos/google.png'
import img4 from '../../../images/logos/uber.png'
import img5 from '../../../images/logos/airbnb.png'
const Sponsor = () => {
    return (
        <div className="container pb-5">
            <div className="row align-items-center text-center">
                <div className="offset-1"></div>
                <div className="col-md-2">
                    <img src={img1} alt="" className="w-75" />
                </div>
                <div className="col-md-2">
                    <img src={img2} alt="" className="w-75" />
                </div>
                <div className="col-md-2">
                    <img src={img3} alt="" className="w-75" />
                </div>
                <div className="col-md-2">
                    <img src={img4} alt="" className="w-75" />
                </div>
                <div className="col-md-2">
                    <img src={img5} alt="" className="w-75"/>
                </div>
                <div className="offset-1"></div>
            </div>
        </div>
    );
};

export default Sponsor;