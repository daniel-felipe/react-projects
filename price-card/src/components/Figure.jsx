import React from 'react';
import figure from '../assets/images/download-icon.png';

const Figure = ({ plan }) => {
    return (
        <section className="figure-container">
            <img 
                src={figure} 
                alt="figure-img" 
            />
            <p>{plan.plan}</p>
        </section>
    );
}

export default Figure;