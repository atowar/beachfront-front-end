import React from 'react';
import './PromoBanner.css';

const Banner = () => {
    return (
        <div className="promo-banner grid justify-items-center">
            <div className="pt-10 text-white">
                <h2 className="text-4xl p-3">COVID-19 testing available at our diagnostic center in Manikganj.</h2>
                <h3 className="text-2xl p-3">Same-day appointments and results for COVID-19 PCR tests.</h3>
                <button className="btn-appointment">Make an appointment</button>
            </div>
        </div>
    );
};

export default Banner;