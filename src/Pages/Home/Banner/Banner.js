import React from 'react';
import banner from "../../../assets/images/Banner.jpg"
import "./banner.css"

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;