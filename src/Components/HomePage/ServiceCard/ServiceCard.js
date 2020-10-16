import React from 'react';
import './ServiceCard.css'
import { Link } from 'react-router-dom';
const ServiceCard = (props) => {
    const { title, description } = props.singleData;

    return (

        <div className="col-md-4 mb-3">
            <Link to="/dashboard/customer-order">
                <div className="card-content text-center hvr-pulse-grow">
                    {/* <img src={photo} alt="" className='w-25' /> */}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </Link>

        </div>

    );
};

export default ServiceCard;