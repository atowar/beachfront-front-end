import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className=" banner grid">
            <div className=" pt-10 text-white">
            <h2 className="md:text-4xl lg:text-4xl text-xl p-3">COVID-19 testing available at our diagnostic center in Manikganj.</h2> 
            <h3 className="text-2xl p-3">Same-day appointments and results for COVID-19 PCR tests.</h3>
            <Link to="/apointment"><button className="btn-appointment">Make an appointment</button></Link>
        </div>
        </div>
    );
};

export default Banner;