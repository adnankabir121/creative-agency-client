import React, { useState, useEffect } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const FeedBack = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://agile-inlet-02613.herokuapp.com/customerReviews')
        
        .then(response => response.json())
        .then(data => {
            setReviews(data);
        })
    },[])
    return (
        <div>
            <div className="container py-5">
                <h2 className="section-title">Clients <span>Feedback</span></h2>
                <div className="row">
                    {
                        reviews.map(singleInfo => <FeedbackCard singleInfo={singleInfo}/> )
                    }
                </div>
            </div>
        </div>
    );
};

export default FeedBack;