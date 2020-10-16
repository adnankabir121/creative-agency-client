import React from 'react';

const ServiceListCard = (props) => {
    const { name, email, projectName, projectDetails } = props.service
    return (
        <div className="row">
            <div className="col-md-2">
                <p>{name}</p>
            </div>
            <div className="col-md-3">
                <p>{email}</p>
            </div>
            <div className="col-md-2">
                <p>{projectName}</p>
            </div>
            <div className="col-md-3">
                <p>{projectDetails}</p>
            </div>
            <div className="col-md-2">
            </div>
        </div>
    );
};

export default ServiceListCard;