import React from 'react';
import { useForm } from 'react-hook-form';

const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {

        fetch('https://agile-inlet-02613.herokuapp.com/customerOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(jsonData => {
                alert("Submitted Successfully");
                console.log(jsonData);
            })
    }
    return (
        <div className="bg-dashboard">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Your name/company's name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="email" placeholder="Your Email Address" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="projectName" placeholder="Project Name" className="form-control" />
                    {errors.projectName && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <textarea type="text" ref={register({ required: true })} name="projectDetails" placeholder="Project Details" className="form-control" />
                    {errors.projectDetails && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <textarea type="text" ref={register({ required: true })} name="price" placeholder="Price" className="form-control" />
                    {errors.price && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <button type="submit" className="btn-brand">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Order;