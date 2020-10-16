import React from 'react';
import './CustomerServiceCard.css'
const CustomerServiceCard = (props) => {
    const { projectName, projectDetails,price } = props.singleService;
    return (
        <div className="col-md-6">
                <div className="service-card">
                    <h2>{projectName}</h2>
                    <p>{projectDetails}</p>
                    <h4>Price : {price}</h4>
                </div>
        </div>
    );
};

export default CustomerServiceCard;