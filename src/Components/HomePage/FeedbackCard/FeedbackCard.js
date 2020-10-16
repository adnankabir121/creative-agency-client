import React from 'react';
import './FeedbackCard.css'
const FeedbackCard = (props) => {
    const { name, companyName, description } = props.singleInfo
    return (
        <div className="col-md-4">
            <div className="single-feedback">
                <div className="name-with-photo d-flex align-items-center">
                    {/* <img src={photo} alt="" className="w-25" /> */}
                    <div>
                        <h4>{name}</h4>
                        <h6>{companyName}</h6>
                    </div>
                </div>
                
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeedbackCard;