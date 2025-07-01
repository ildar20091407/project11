import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // стили для эффекта fade

import Home from './Home';
import Home1 from './Home1';
import Home2 from './Home2';

// Подключаем необходимые модули Swiper
SwiperCore

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
                    navigation={true}
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    mousewheel={true}
                    loop={false}
                    onSlideChange={handleSlideChange}
                    effect="fade" // Добавлен эффект затухания
                    fadeEffect={{ crossFade: true }} // Плавный crossFade
                >
                    {navbars.map((navbar) => navbar)}
                </Swiper>
                <button onClick={goToNext} disabled={currentSlide === navbars.length - 1}>
                    Next
                </button>
            </div>
        </>
    );
}

export default App;

