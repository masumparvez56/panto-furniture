import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { reviews } from '../../utils/reviews';
import Rating from "./../../components/Rating";

const Review = () => {
    return (
        <section className='section-container px-8'>
            <div className='text-center mb-12'>
                <h3 className='uppercase text-lg font-semibold text-primary mb-4'>Testimonials</h3>
                <h2 className=' capitalize text-4xl font-bold mb-4'>Our Client Reviews</h2>
            </div>

            {/* review cards */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper relative"
            >
                {
                    reviews.map((review, index) => (
                        <SwiperSlide
                            key={index}
                            className='bg-no-repeat bg-cover rounded-lg'
                            style={{ backgroundImage: `url(${review.coverImg})` }}
                        >
                            <div className='md:h-[540px] flex justify-center items-center mb-4'>
                                <div className='mt-16 mb-5 bg-white border rounded-xl w-full md:w-4/5 p-4 relative'>
                                    <img
                                        src={review.image}
                                        alt=""
                                        className='size-20 absolute -top-8 ring-2 ring-primary object-cover rounded-full left-1/2 -translate-x-1/2'
                                    />
                                    <div className='mt-16 text-center'>
                                        <h3 className='text-lg font-semibold dark:text-black'>{review.name}</h3>
                                        <p className='mb-3 dark:text-black'>Verified Customer</p>
                                        <p className='text-gray-500 dark:text-black mb-4'>{review.review}</p>
                                        <div className='w-full mx-auto mb-2 flex justify-center text-center'>
                                            <Rating rating={review.rating}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

                {/* Custom Buttons */}
                <div className="custom-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 px-3 py-1 ring-1 ring-primary bg-white rounded-full text-black hover:bg-primary hover:text-white cursor-pointer text-2xl font-bold">
                    &lt;
                </div>
                <div className="custom-next absolute top-1/2 right-0 z-10 -translate-y-1/2 px-3 py-1 ring-1 ring-primary bg-white rounded-full text-black hover:bg-primary hover:text-white cursor-pointer text-2xl font-bold">
                    &gt;
                </div>
            </Swiper>
        </section>
    );
};

export default Review;
