import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import PhotoGallery from './PhotoGallery';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <PhotoGallery></PhotoGallery>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;