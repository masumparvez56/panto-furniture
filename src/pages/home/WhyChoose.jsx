import React from 'react';
import Button from '../../components/Button';

const WhyChoose = () => {
    return (
        <section className='section-container xl:mt-4'>
            <div className='my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-5 md:gap-10 text-left'>
                <div>
                    <h2 className='text-4xl font-bold'>Why <br/> Choosing Us</h2>
                </div>
                <div>
                    <h3 className='text-2xl xl:text-3xl font-semibold mb-3'>Luxury facilities</h3>
                    <p className='text-base xl:text-xl mb-2'>The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.</p>
                    <Button text="Learn More" />
                </div>
                <div>
                    <h3 className='text-2xl xl:text-3xl font-semibold mb-3'>Affordable Price</h3>
                    <p className='text-base mb-2 xl:text-xl'>You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.</p>
                    <Button text="Learn More" />
                </div>
                <div>
                    <h3 className='text-2xl xl:text-3xl font-semibold mb-3'>Many Choices</h3>
                    <p className='text-base mb-2 xl:text-xl'>We provide many unique workspace choices so<br/> that you can choose<br/> the workspace to your liking.</p>
                    <Button text="Learn More" />
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
