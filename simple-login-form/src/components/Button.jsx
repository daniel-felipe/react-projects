import React from 'react';

const Button = ({ type = 'button', children }) => {
    return (
        <button type="submit" className="w-full h-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white uppercase shadow-lg rounded-lg transition hover:shadow-indigo-500/50 focus:scale-95">
            {children}
        </button>
    );
};

export default Button;
