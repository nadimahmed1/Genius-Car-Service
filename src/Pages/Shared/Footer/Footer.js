import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>

            <p><small>CopyRight @ {year}</small></p>
        </footer>
    );
};

export default Footer;