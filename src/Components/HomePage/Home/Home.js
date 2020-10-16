import React from 'react';
import './Home.css'
import Menu from '../Menu/Menu';
import HeroArea from '../HeroArea/HeroArea';
import Sponsor from '../Sponsor/Sponsor';
import ServiceSection from '../ServiceSection/ServiceSection';
import Portfolio from '../Portfolio/Portfolio';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className="menu">
                <Menu />
            </div>
            <HeroArea />
            <Sponsor/>
            <ServiceSection/>
            <Portfolio/>
            <FeedBack/>
            <Footer/>
        </div>

    );
};

export default Home;