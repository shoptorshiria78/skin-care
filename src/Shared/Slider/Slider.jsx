import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <div>
                <div className='text-center'>
                    <h1 className="text-4xl mt-10 text-red-600  font-bold">Our Events</h1>
                    <p className='text-red-300 my-7'>Elevate Your Events, Achieve Excellence. Crafting Memorable Experiences.<br/> Your Success, Our Commitment. Welcome to Event Excellence!</p>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/Rp6Q1QW/banner-slider-pic-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/HGgWr4N/banner-slider-pic-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/hF8Q71c/event-slider-pic-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/Lt1nmX0/corporate-slider-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/jJ4pZM7/corporate-slider-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/X8Fxk6S/corporate-slider-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/X7g5Bbn/corporate-slider-8.jpg" />
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    );
}

export default Slider;