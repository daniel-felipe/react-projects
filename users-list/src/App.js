import React, { useEffect, useState } from 'react';
import { allUsers } from './api/data';
import Card from './components/Card';
import SearchInput from './components/SearchInput';

const App = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search === '') {
            allUsers().then((users) => setUsers(users));
        } else {
            allUsers().then((users) =>
                setUsers(
                    users.filter((user) =>
                        user.firstName
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                )
            );
        }
    }, [search]);

    return (
        <main>
            <div className='user-list-container'>
                <h2>Usuários</h2>
                <div className='user-list-actions'>
                    <SearchInput
                        setSearch={setSearch}
                        setUsers={setUsers}
                        users={users}
                    />
                </div>
                <div className='user-list'>
                    {users.map((user) => (
                        <Card key={user.id} {...user} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default App;
