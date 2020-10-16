import React from 'react';
import './CusotomerSideBar.css'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import order from '../../../images/icons/order.png'
import review from '../../../images/icons/review.png'
import list from '../../../images/icons/list.png'
const CustomerSidebar = () => {
    return (
        <div className="sidebar-area">
            <img src={logo} alt="" className="logo"/>
            <ul>
                <li><Link to="/dashboard/customer-order"><img src={order} alt=""/>Order</Link></li>
                <li><Link to="/dashboard/service-list"><img src={list} alt=""/>Service list</Link></li>
                <li><Link to="/dashboard/customer-review"><img src={review} alt=""/>Review</Link></li>
            </ul>
        </div>
    );
};

export default CustomerSidebar;