import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import ProductsInfo from './ProductsInfo';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-earth-81870.herokuapp.com/products')
            .then(res => res.json())

            
            .then(data => setProducts(data))
        }, [])
        


    return (
        <div className='mx-6'>
            <h1 className='text-center text-4xl mt-3'>Our Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.slice(0,3).map(product => <ProductsInfo
                        key={product._id}
                        product={product}
                    ></ProductsInfo>)
             
                }
            </div>
            
        </div>
    );
};

export default Products;