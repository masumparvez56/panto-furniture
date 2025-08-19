import React from 'react';
import Products from './Products';

const Shop = () => {
    return (
        <div>
            <section className='min-h-screen'>
                {/* banner */}
                <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white' style={{
                backgroundImage: `url("https://i.ibb.co.com/4ZLctFZf/banner.png")`,
                }}>
                    <h1 className=' text-3xl md:text-4xl font-bold pb-4'>Shop Our Products</h1>
                </div>
                <Products headline="What's Your Choise"/>
            </section>
        </div>
    );
};

export default Shop;