import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Experiences from './Experiences';
import Materials from './Materials';
import Review from './Review';

const Home = () => {
    return (
        <>
           <Hero/>
           <WhyChoose/>
           <Products headline="Best selling Product"/>
           <Experiences/>
           <Materials/>
           <Review/>
        </>
    );
};

export default Home;