import React, { useState, useEffect, useContext } from 'react';
import CustomerSidebar from '../CustomerSideBar/CustomerSidebar';
import CustomerServiceCard from '../CustomerServiceCard/CustomerServiceCard';
import { UserContext } from '../../../App';

const CustomerServiceList = () => {
    const [customerServices, setCustomerServices] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://agile-inlet-02613.herokuapp.com/customerOrder')

            .then(response => response.json())
            .then(data => {
                setCustomerServices(data);
            })
    }, [])
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
                                <div className="row">
                                    {
                                        customerServices.map(singleService => <CustomerServiceCard singleService={singleService} />)
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomerServiceList;