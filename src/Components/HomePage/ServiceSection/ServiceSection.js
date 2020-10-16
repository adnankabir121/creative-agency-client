import React, { useState, useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceSection = () => {

    const [services,setServices]=useState([])
    
    useEffect(()=>{
        fetch('https://agile-inlet-02613.herokuapp.com/allServices')
        
        .then(response => response.json())
        .then(data => {
            setServices(data);
        })
    },[])
    

    return (
        <div className="container py-5">
            <h2 className="section-title">Provide awesome <span>services</span></h2>
            <div className="row">
                {
                    services.map(singleData=> <ServiceCard singleData={singleData} key={singleData._id}/>)
                }
            </div>
        </div>
    );
};

export default ServiceSection;