import React, { useContext } from 'react';
import './CustomerMainDashboard.css'
import CustomerSidebar from '../CustomerSideBar/CustomerSidebar';
import { UserContext } from '../../../App';
import Order from '../Order/Order';
const CustomerMainDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
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
                            <Order/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerMainDashboard;