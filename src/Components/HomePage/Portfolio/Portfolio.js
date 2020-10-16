import React from 'react';
import Slider from "react-slick";
import './Portfolio.css'
import img1 from '../../../images/carousel-1.png'
import img2 from '../../../images/carousel-2.png'
import img3 from '../../../images/carousel-3.png'
import img4 from '../../../images/carousel-4.png'
import img5 from '../../../images/carousel-5.png'
const Portfolio = () => {
    const settings = {
        infinite: true,
        speed: 500,
        
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className="portfolio-area">
            <div className="container">
                <h2 className="section-title text-white">Here are some of <span>our works</span> </h2>
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt=""/>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div >
                        <img src={img3} alt="" />
                    </div>
                    <div >
                        <img src={img4} alt="" />
                    </div>
                    <div>
                        <img src={img5} alt="" />
                    </div>
                </Slider>
            </div>
        </div>


    );
};

export default Portfolio;