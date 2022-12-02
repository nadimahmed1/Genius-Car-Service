import React from 'react';
import './service.css'

const service = ({ service }) => {
    const { id, name, price, img, description } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <p>{description}</p>
            <button>Book: {name}</button>
        </div>
    );
};

export default service;