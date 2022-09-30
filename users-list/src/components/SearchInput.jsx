import React, { useEffect, useState } from 'react';
import { searchUser } from '../api/data';

const SearchInput = ({ setUsers }) => {
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        searchUser(search)
            .then((data) => {
                setUsers(data);
            });
    }, [search, setUsers]);

    return (
        <div className='user-search'>
            <input
                onChange={handleSearch}
                value={search}
                className='input'
                type='text'
                placeholder='Procurar'
            />
        </div>
    );
};

export default SearchInput;
