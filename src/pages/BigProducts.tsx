import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Home from  './Products';
import Home1 from './Products1';
import Home2 from './Products2';

SwiperCore;

const navbars = [
    <SwiperSlide key="home"><Home /></SwiperSlide>,
    <SwiperSlide key="home1"><Home1 /></SwiperSlide>,
    <SwiperSlide key="home2"><Home2 /></SwiperSlide>,
];

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);
    };

    const goToPrevious = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goToNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <>
            <div className="swiper-container">
                <button onClick={goToPrevious} disabled={currentSlide === 0}>
                    Previous
                </button>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation = {true} // enable navigation
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    mousewheel = {true} //enable moursewheel
                    loop={false}
                    onSlideChange={handleSlideChange}
                >
                    {navbars.map((home) => (
                        home
                    ))}
                </Swiper>
                <button onClick={goToNext} disabled={currentSlide === navbars.length - 1}>
                    Next
                </button>
            </div>
        </>
    );
}

export default App;
