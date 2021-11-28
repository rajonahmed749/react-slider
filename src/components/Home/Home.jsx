import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./styles.css";
import photo1 from '../../assets/images/bag.png';
import photo2 from '../../assets/images/bag-1.png';
import photo3 from '../../assets/images/bag-2.png';
import photo4 from '../../assets/images/bag-3.png';
import { Link } from 'react-router-dom';

SwiperCore.use([Pagination, Navigation]);


const Data = [
    {
        heading: 'Max Bag',
        img: photo1,
        like:45,
        price: 120
    },
    {
        heading: 'Louis Vuitton',
        img: photo3,
        like:455,
        price: 220
    },
    {
        heading: 'Zara Bag',
        img: photo2,
        like:876,
        price: 340
    },
    {
        heading: 'Fashion Bag',
        img: photo3,
        like:998,
        price: 699
    },
    {
        heading: 'Fendi Bag',
        img: photo4,
        like:120,
        price: 105
    },
    {
        heading: 'New Bag',
        img: photo4,
        like:67,
        price: 222
    }
]

const Home = () => {
    return (
        <div className='mt-5'>
            <Swiper
                slidesPerView={4} spaceBetween={15} slidesPerGroup={3}
                loop={true} loopFillGroupWithBlank={true}
                pagination={{ "clickable": true }}
                navigation={true} className="mySwiper"
            >
                {
                    Data?.map((bag) => (
                        <SwiperSlide className='swiiper-slide'>
                            <div className='slide-body'>
                                <img src={bag.img} alt="bag" />
                                <h2>{bag.heading} </h2>
                               Likes : <i className="far fa-thumbs-up me-2">{bag.like}</i> Price: ${bag.price}<br />
                                <Link to='/bag-details' type="button" class="btn btn-primary buy-btn">Buy Now</Link> 
                                
                            </div>
                        </SwiperSlide>
                    ))
                }
                {/* <SwiperSlide>
                    <div className='slide-body'>
                        <img src={photo1} alt="bag" />
                        <h2>Armani bag</h2>
                        <Link to='/bag-details' type="button" class="btn btn-primary">Buy Now</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default Home
