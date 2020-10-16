import React from 'react';
import logo from '../../../images/logos/logo.png'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import img1 from '../../../images/icons/list.png'
import img2 from '../../../images/icons/plus.png'
import img3 from '../../../images/icons/person.png'
const SideBar = () => {
    return (
        <div className="sidebar-area">
            <img src={logo} alt=""/>
            <ul>
                <li><Link to="/dashboard/serviceList"> <img src={img1} alt=""/> Service list</Link></li>
                <li><Link to="/dashboard/addService"> <img src={img2} alt=""/>Add Service</Link></li>
                <li><Link to="/dashboard/makeAdmin"> <img src={img3} alt=""/>Make Admin</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;