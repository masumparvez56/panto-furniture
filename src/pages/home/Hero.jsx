import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <section
            className="h-screen px-2 relative bg-cover bg-center text-white"
            style={{
                backgroundImage: `url("https://i.ibb.co.com/4ZLctFZf/banner.png")`,
            }}
        >
            <div className="md:pt-28 pt-20 text-center space-y-4 md:space-y-5 md:w-1/2 mx-auto">
                <h1 className="text-3xl lg:text-4xl font-medium lg:leading-tight leading-snug">
                    Make your interior more minimalistic & modern
                </h1>
                <p className="text-sm font-normal lg:w-1/2 mx-auto">
                    Turn your room with panto into a lot more minimalist and modern with ease and speed
                </p>

                {/* search field */}
                <div className="relative inline-block z-30 md:mt-1.5 w-72 md:w-80 mx-auto">
                    <input
                        type="text"
                        placeholder="Search furniture"
                        className="w-full px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none text-black placeholder:text-black"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer text-white">
                        <FaSearch />
                    </div>
                </div>
            </div>

            {/* bottom blur effect */}
            <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'>
            </div>
        </section>
    );
};

export default Hero;
