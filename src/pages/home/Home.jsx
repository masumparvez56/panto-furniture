import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Experiences from './Experiences';

const Home = () => {
    return (
        <>
           <Hero/>
           <WhyChoose/>
           <Products headline="Best selling Product"/>
           <Experiences/>
        </>
    );
};

export default Home;