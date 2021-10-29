import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/footer-logo.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
            <div className="footer grid justify-items-center my-5">
            <div className=" grid md:grid-cols-4 lg:grid-cols-4 gap-4 text-left p-2 md:w-2/3 lg:w-2/3 text-black py-5 text-md">
                <div>
                    <img className="w-3/5" src={logo} alt="" />
                    <p>+880178921457</p>
                    <p>Sadar Road, Manikganj, Dhaka, Bangladesh</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold py-2">About MediCenterBD</h2>
                    <p>MediCenterBD is a leading healthcare provider specialising in diagnostic services for the private healthcare market. We help patients start the health journey sooner.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold py-2">Usefull Links</h2>
                    <nav>
                        <NavLink to="/faq">FAQ</NavLink> <br />
                        <NavLink to="/services">Services</NavLink> <br />
                        <NavLink to="/consultants">Consultants</NavLink> <br />
                        <NavLink to="/contact">Contact us</NavLink> <br />
                    </nav>
                </div>
                <div>
                    <h2 className="text-xl font-bold py-2">News Letter</h2>
                    <form action="">
                        <input type="email border-2 border-black" placeholder="Your Email"/> <br /> <br />
                        <input className=" button px-5 py-2 rounded-md" type="submit" value="submit" />
                    </form>
                </div>
            </div>
            </div>
      
    );
};

export default Footer;