import React from 'react';
import {useNavigate } from 'react-router-dom';


const ProductsInfo = ({ product }) => {
    const { _id, name, description, img, minimumOrderQuantity, price, availableQuantity } = product
    const navigate = useNavigate()

    const handleBuyNow = id => {
        navigate(`/purchase/${id}`)

    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p className=''>{description}</p>
                <p className=''>MinimumOrder Quantity:{minimumOrderQuantity}</p>
                <p className=''>Available Quantity:{availableQuantity}</p>
                <p>price:{price}</p>
                <div className="card-actions justify-center">
                    <button onclick={() => handleBuyNow(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div >
        </div >
    );
};

export default ProductsInfo;