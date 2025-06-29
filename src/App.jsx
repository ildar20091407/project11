import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";



const navbars = [
    <Navbar />,
    <Navbar1 />,
    <Navbar2 />,
];

function App() {
    const [ setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current, next) => {
            setCurrentSlide(next);
        }
    };



 

    return (
        <>
            <div className="navbar-container">

                <Slider ref={sliderRef} {...settings}>
                    {navbars.map((navbar, index) => (
                        <div key={index}>{navbar}</div>
                    ))}
                </Slider>
            </div>


        </>
    );
}

export default App;

