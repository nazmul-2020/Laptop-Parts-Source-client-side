import React from 'react';

import g1 from '../../assets/images/Banner.jpg'
import g2 from '../../assets/gallery/g2.jpg'
import g3 from '../../assets/gallery/g3.jpg'
import g4 from '../../assets/gallery/g-4.jpg'
import g5 from '../../assets/gallery/g-5.jpg'
import g6 from '../../assets/gallery/g6.jpg'
import g7 from '../../assets/gallery/g7.jpg'
import g8 from '../../assets/gallery/g8.jpg'

const PhotoGallery = () => {
    return (
        <div>
            <div className='bg-slate-300 px-3' >
                <h1 className='text-center p-4 text-green-800 text-4xl'>Photo Gallery</h1><div className="container mt-5">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <img className="img-fluid mb-3 -" src={g1} alt=""></img>
                            </div>
                            <div className="row">
                                <img className="img-fluid mb-3 " src={g2} alt=""></img>
                            </div>
                            {/* <div className="row">
                                <img className="img-fluid mb-3 " src={g3} alt=""></img>
                            </div> */}
                            <div className="row">
                                <img className="img-fluid mb-3 " src={g4} alt=""></img>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <img className="img-fluid mb-3 " src={g5} alt=""></img>
                            </div>
                            <div className="row">
                                <img className="img-fluid mb-3 " src={g6} alt=""></img>
                            </div>
                            <div className="row">
                                <img className="img-fluid mb-3 " src={g7} alt=""></img>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <img className="img-fluid mb-3 " src={g7} alt=""></img>
                            </div>
                            <div className="row ">
                                <img className="img-fluid mb-3 " src={g3} alt=""></img>
                            </div>
                            <div className="row ">
                                <img className="img-fluid mb-3 " src={g8} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>


    );
};

export default PhotoGallery;