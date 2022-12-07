import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const ProductsInfo = ({ product }) => {
    const { _id, name, description, img, minimumOrderQuantity, price, availableQuantity } = product;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <img src={img} alt="Shoes" />
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p className='m-0 p-0'>{description.slice(0,200)}</p>
                <p className='m-0'>MinimumOrder Quantity:{minimumOrderQuantity}</p>
                <p className='m-0'>Available Quantity:{availableQuantity}</p>
                <p className='m-0'>price:{price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/purchase/${_id}`} >
                        <button className="btn btn-primary no-underline text-white">Buy Now</button>
                    </Link>
                </div>
            </div >
        </div >
    );
};

export default ProductsInfo;