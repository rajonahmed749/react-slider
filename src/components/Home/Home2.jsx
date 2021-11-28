import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./styles.css";
 import photo from '../../assets/images/bag.png'

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);


const Home2 = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
            '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
        ]);
    }

    const prepend = () => {
        swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    }

    const append = () => {
        swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    }

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
            '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
        ]);
    }

    return (
        <>

            <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
                "type": "fraction"
            }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <img src={photo} alt="" />
                    <h2>armani bag</h2>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

            <p className="append-buttons">




                <button onClick={() => prepend2()} className="prepend-2-slides">Prepend 2 Slides</button>
                <button onClick={() => prepend()} className="prepend-slide">Prepend Slide</button>
                <button onClick={() => append()} className="append-slide">Append Slide</button>
                <button onClick={() => append2()} className="append-2-slides">Append 2 Slides</button>
            </p>

        </>
    )
}

export default Home2
