import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import CustomerSidebar from '../CustomerSideBar/CustomerSidebar';

const CustomerReview = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const onSubmit = data => {

        fetch('https://agile-inlet-02613.herokuapp.com/customerReviews', {
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
        <div>
            <div className="dashboard-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <CustomerSidebar />
                        </div>
                        <div className="col-md-9 bg-dashboard">
                            <div className="dashboard-content">
                                <p>Name : {loggedInUser.name}</p>
                                <p>Email : {loggedInUser.email}</p>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-group">
                                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="form-group">
                                        <input type="text" ref={register({ required: true })} name="companyName" placeholder="Company's Name, Designation" className="form-control" />
                                        {errors.companyName && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" ref={register({ required: true })} name="description" placeholder="Description" className="form-control" />
                                        {errors.description && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn-brand">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;