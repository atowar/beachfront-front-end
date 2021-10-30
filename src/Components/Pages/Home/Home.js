import React from 'react';
import PromoBanner from './PromoBanner/PromoBanner';
import Services from './Services/Services';
import Reviews from './Reviews/Reviews';
import FooterTop from './FooterTop/FooterTop';
import NavbarSlider from './NavbarSlider/NavbarSlider';
import ResortServices from './NavbarSlider/ResortServices/ResortServices';
import ResortFacilites from './ResortFacilites/ResortFacilites';


const Home = () => {
    return (
        <div>
            <NavbarSlider></NavbarSlider>
            <ResortServices></ResortServices>
            <PromoBanner></PromoBanner>
            <ResortFacilites></ResortFacilites>
            <Services></Services>
            <Reviews></Reviews>
            <FooterTop></FooterTop>
        </div>
    );
};

export default Home;