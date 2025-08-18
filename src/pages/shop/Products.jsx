import React, { useState } from 'react';
import { products } from '../../utils/products';
import ProductCart from './ProductCart';
import btnIcon from "../../assets/button-icon.png"

const Products = ({headline}) => {
    const categories = ["Chair", "Beds", "Sofa", "Lamp"]
    const [selectedcategory, setSelectedCategory] = useState("Chair");
    const [visibleProducts, setVisibleProducts] = useState(4)
    const filterProducts = products.filter((product) => product.category === selectedcategory)

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 4)
    }
    return (
        <div>
            <div className='section-container'>
            <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>

            {/* category tabs */}
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2 py-5 mb-16'>
                    <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                        {
                            categories.map((category) => (
                                <button
                                onClick={() => {
                                  setSelectedCategory(category);  
                                  setVisibleProducts(4)
                                }}
                                key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${selectedcategory === category ? "bg-white text-primary" : "text-secondary"}`}>{category}</button>
                            ))
                        }
                    </div>
                </div>

                {/* products Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {
                        filterProducts.slice(0, visibleProducts).map((product, index) => (
                            <ProductCart key={index} product={product}/>
                        ))
                    }
                </div>

                {/* load more button */}
                {
                    visibleProducts < filterProducts.length && (
                        <div className='flex justify-center items-center mt-8 '>
                            <button
                            onClick={loadMoreProducts}
                            className=' text-base font-semibold text-primary flex items-center gap-1'>
                                       View All
                                       <img className='w-10' src={btnIcon} alt="" />
                                    </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Products;