const allUsers = async () => {
    return await fetch('https://dummyjson.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data?.users;
        });
};

const searchUser = async (searchTerm) => {
    return await fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data?.users;
        });
}

export {
    allUsers,
    searchUser,
}
