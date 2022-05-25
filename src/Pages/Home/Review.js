import React from 'react';
import './Review.css'

const Review = ({ review }) => {

    const { name, img,reviewText, ratings } = review;
  

    return (
        <div className='my-3'>
            <div className='review-info'>
                <div className='dd'>
                    <img src={img} alt="" />
                    <h4>Name : {name}</h4>
                </div>
                <p><span>Review</span> : {reviewText}</p>
                <p><small>Ratings : </small>{ratings}</p>
            </div>

        </div>
    );
};

export default Review;