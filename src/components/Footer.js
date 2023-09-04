import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    return (
        <div className='footer-wrapper'>
            <div className='bg-dark text-white p-3 text-center'>
                <p>Copyright &copy; Md Habib Sarker, Charles Darwin University, {today.getFullYear()} </p>
            </div>
        </div>
    );
};

export default Footer;
