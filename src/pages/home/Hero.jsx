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
            <div className="pt-20 xl:pt-32 text-center space-y-4 md:space-y-5 xl:space-y-6 lg:space-y-4 md:w-1/2 mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium lg:leading-tight leading-snug">
                    Make your interior more minimalistic & modern
                </h1>
                <p className="text-sm xl:text-xl font-normal lg:w-1/2 mx-auto">
                    Turn your room with panto into a lot more minimalist and modern with ease and speed
                </p>

                {/* search field */}
                <div className="relative inline-block z-30 md:mt-1.5 w-72 md:w-80 xl:w-96 mx-auto">
                    <input
                        type="text"
                        placeholder="Search furniture"
                        className="w-full px-6 py-2 xl:py-4 bg-white/25 rounded-full border border-gray-300 focus:outline-none text-black placeholder:text-black"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer text-white">
                        <FaSearch />
                    </div>
                </div>
            </div>

            {/* bottom blur effect */}
            <div className='absolute inset-x-0 bottom-0 h-3/4 xl:h-3/5 -mb-2 lg:-mb-3 xl:-mb-5 bg-gradient-to-t from-white/80 xl:from-white/90 via-transparent to-transparent blur-sm lg:blur-md'/>
        </section>
    );
};

export default Hero;
