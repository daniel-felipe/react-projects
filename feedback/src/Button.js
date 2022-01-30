import React from 'react';

const Button = ({ func }) => {
    return (
        <button className="button">
            { func }
        </button>
    );
}

export default Button;