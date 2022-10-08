import React from 'react';
import Label from './Label';

const Input = ({ name, type = 'text', placeholder }) => {
    
    return (
        < >
            <Label name={name} />

            <input 
                className="w-full h-12 px-3 border text-gray-700" 
                type={type} 
                placeholder={placeholder} 
                name={name} 
            />
        </>
    );
};

export default Input;
