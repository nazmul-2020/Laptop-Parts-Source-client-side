import React from 'react';
import './Review.css'

const Review = ({ review }) => {

    const { name, img, reviewText, ratings } = review;


    return (
        <div className='my-3'>
            <div className='review-info'>
                {/* <div className='dd'>
                    <img src={img} alt="" />
                </div> */}
                <div className="avatar mx-auto">
                    <div className="w-24 rounded-full ring ">
                        <img className='mx-auto block' src={img} alt=""/>
                    </div>
                </div>
                <h4 className='font-bold'>{name}</h4>
                <p><span>Review</span> : {reviewText}</p>
                <p><small>Ratings : </small>{ratings}</p>
            </div>

        </div>
    );
};

export default Review;