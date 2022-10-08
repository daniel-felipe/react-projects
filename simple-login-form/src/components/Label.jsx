import React from 'react';

const formatName = (name) => {
    return name.includes('_') ? name.replace('_', ' ') : name;
};

const Label = ({ name }) => {
    return (
        <label
            className='block mb-2 uppercase text-sm font-semibold text-gray-600'
            htmlFor={name}
        >
            {formatName(name)}
        </label>
    );
};

export default Label;
