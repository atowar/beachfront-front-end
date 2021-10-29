import React from 'react';
import Banner from './Banner/Banner';
import PromoBanner from './PromoBanner/PromoBanner';
import Services from './Services/Services';
import Consultants from './Consultants/Consultants';
import Reviews from './Reviews/Reviews';
import FooterTop from './FooterTop/FooterTop';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>
            <Services></Services>
            <PromoBanner></PromoBanner>
            <Consultants></Consultants>
            <FooterTop></FooterTop>
        </div>
    );
};

export default Home;