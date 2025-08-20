import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Experiences from './Experiences';
import Materials from './Materials';

const Home = () => {
    return (
        <>
           <Hero/>
           <WhyChoose/>
           <Products headline="Best selling Product"/>
           <Experiences/>
           <Materials/>
        </>
    );
};

export default Home;