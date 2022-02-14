import React from 'react';

const Price = ({ plan }) => {
    return (
        <section className="price-container">
            <span>
                <small>R$ </small>
                <h1>{plan.price}</h1>
                <h3>/Month</h3>
            </span> 
        </section>
    )
}

export default Price;