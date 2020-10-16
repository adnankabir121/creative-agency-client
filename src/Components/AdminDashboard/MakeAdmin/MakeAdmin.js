import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="dashboard-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar />
                    </div>
                    <div className="col-md-9 bg-dashboard">
                        <div className="dashboard-content">
                            <p>Name : {loggedInUser.name}</p>
                            <p>Email : {loggedInUser.email}</p>
                            <form>
                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
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

    );
};

export default MakeAdmin;