import React from 'react';
import aboutImg from '../../assets/about-background.jpg'
import Experiences from '../home/Experiences';

const About = () => {
    return (
        <section>
            {/* banner */}
            <div className='w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white' style={{ backgroundImage: `url(${aboutImg})` }}>
                <div>
                    <h1 className='text-5xl font-bold underline underline-offset-4'>About Page</h1>
                </div>

            </div>
            <Experiences />
        </section>
    );
};

export default About;