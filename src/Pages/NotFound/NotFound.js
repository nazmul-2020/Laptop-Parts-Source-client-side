// import React from 'react';

// const NotFound = () => {
//     return (
//         <div>
//             <h1 className='text-4xl text-center'>NOT FOUND</h1>
            
//         </div>
//     );
// };

// export default NotFound;

import React from 'react';
import notFound from '../../assets/404-not-found.png';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className='notFound'>
                <h1 className='text-center text-4xl pb-3'>Page Not Found 404 !! </h1>
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;