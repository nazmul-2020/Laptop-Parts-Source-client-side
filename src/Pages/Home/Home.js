import React from 'react';
import Footer from '../Shared/Navbar/Footer';
import Banner from './Banner';
import Contact from './Contact';
import PhotoGallery from './PhotoGallery';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
                <h1>Home</h1>
                <Banner></Banner>
                <Products></Products>
                <Reviews></Reviews>
                <Contact></Contact>
                <PhotoGallery></PhotoGallery>
                <Footer></Footer>
        </div>
    );
};

export default Home;