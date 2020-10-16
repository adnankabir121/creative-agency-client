import React, { useEffect, useState } from 'react';
import './ServiceList.css'
import ServiceListCard from '../ServiceListCard/ServiceListCard';
const ServiceList = () => {
    const [servicelist, setServiceList] = useState([])
    useEffect(() => {
        fetch('https://agile-inlet-02613.herokuapp.com/customerOrder')

            .then(response => response.json())
            .then(data => {
                setServiceList(data);
            })
    }, [])
    return (
        <div className="list-container">
            <div className="admin-list">
                <div className="list-header">
                    <div className="row">
                        <div className="col-md-2">
                            <p>Name</p>
                        </div>
                        <div className="col-md-3">
                            <p>Email</p>
                        </div>
                        <div className="col-md-2">
                            <p>Service</p>
                        </div>
                        <div className="col-md-3">
                            <p>Project Details</p>
                        </div>
                        <div className="col-md-2">
                            <p>Status</p>
                        </div>
                    </div>
                </div>
                <div className="list-data">
                    {
                        servicelist.map(service => <ServiceListCard service={service} />)
                    }
                </div>
            </div>
        </div>

    );
};

export default ServiceList;