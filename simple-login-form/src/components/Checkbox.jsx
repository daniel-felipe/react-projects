import React from 'react';

const Checkbox = ({ name, label }) => {
    return (
        <>
            <label
                className='text-gray-600 text-sm font-semibold flex items-center'
                htmlFor={name}
            >
                <input
                    className='w-5 h-5 cursor-pointer mr-3'
                    type='checkbox'
                    name={name}
                />
                {label}
            </label>
        </>
    );
};

export default Checkbox;
