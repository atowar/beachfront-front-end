import React from 'react';
import PromoBanner from './PromoBanner/PromoBanner';
import Services from './Services/Services';
import Reviews from './Reviews/Reviews';
import FooterTop from './FooterTop/FooterTop';
import NavbarSlider from './NavbarSlider/NavbarSlider';
import ResortServices from './NavbarSlider/ResortServices/ResortServices';
import ResortFacilites from './ResortFacilites/ResortFacilites';
import AboutSection from './AboutSection/AboutSection';
import PromoBottom from './PromoBottom/PromoBottom';


const Home = () => {
    return (
        <div>
            <NavbarSlider></NavbarSlider>
            <ResortServices></ResortServices>
            <PromoBanner></PromoBanner>
            <Services></Services>
            <AboutSection></AboutSection>
            <ResortFacilites></ResortFacilites>
            <PromoBottom></PromoBottom>
            <Reviews></Reviews>
            <FooterTop></FooterTop>
        </div>
    );
};

export default Home;