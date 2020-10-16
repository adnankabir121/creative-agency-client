import React, { useContext } from 'react';
import SideBar from '../SideBar/SideBar';
import './AdminDashboard.css'
import ServiceList from '../ServiceList/ServiceList';
import { UserContext } from '../../../App';
const AdminDashboard = () => {
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
                            <ServiceList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;