import React from 'react';

const SearchInput = ({ setSearch }) => {
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className='user-search'>
            <input
                onChange={handleSearch}
                className='input'
                type='text'
                placeholder='Procurar'
            />
        </div>
    );
};

export default SearchInput;
