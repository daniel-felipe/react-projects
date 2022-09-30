import React, { useEffect, useState } from 'react';
import { allUsers } from './api/data';
import Card from './components/Card';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        allUsers().then((users) => setUsers(users));
    }, []);

    return (
        <main>
            <div className='user-list-container'>
                <h2>Users</h2>
                <div className='user-list-actions'>
                    <SearchInput setUsers={setUsers} />
                    <Navbar />
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
