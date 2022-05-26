import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='container my-3'>
            <h3 className='text-center text-4xl  '>My Portfolio</h3>
            <div className=' row g-5 my-5   shadow rounded'>
                <div className=' col-lg-6 col-md-12 d-flex   align-items-center text-justify '>
                    <div className='mx-auto'>
                        <h3 className='text-primary  text-xl'>Name : Nazmul Hasan</h3>
                        <p>Email: nazmulcpi2012@gmail</p>
                        <p className='text-xl font-bold'>Educational Background:</p>
                        <p >Diploma Computer Engineering</p>
                        <p >Chandpur Polytechnic Institute</p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 py-5 mx-auto'>
                    <p className='text-xl '> Technology</p>
                    <p>Html,CSS,Bootstrap,Tailwind,Javascript,Daisyui,React.js,API,JSON,Firebase Authentication,Nodejs,Express.js,Mongodb,Netlify, Heroku, DevTool, </p>
                    <p className='text-xl '>  Live Website</p>

                    <li></li>
                    <li>https://bike-gallery-8ee18.web.app/</li>
                    <li>https://dentalcare-fdc83.web.app/</li>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;