import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='footer'>
            <p> &copy; 2023 burgerBigo.com</p>
            <p className='socialMedia'><FaFacebookF /> <FaTwitter /> <FaInstagram /></p>

        </div>
    )
}

export default Footer;
