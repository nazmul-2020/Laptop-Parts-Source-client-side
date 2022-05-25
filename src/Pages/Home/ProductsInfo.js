import React from 'react';
import { Link } from 'react-router-dom';

const ProductsInfo = ({ product }) => {
    const { name, description, img, minimumOrderQuantity, price, availableQuantity } = product

    return (

        <div class="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body ">
                <h2 class="card-title">{name}</h2>
                <p className=''>{description}</p>
                <p className=''>MinimumOrder Quantity:{minimumOrderQuantity}</p>
                <p className=''>Available Quantity:{availableQuantity}</p>
                <p>price:{price}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary"><Link to='/purchase'>Buy Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ProductsInfo;