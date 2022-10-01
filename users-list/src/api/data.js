const allUsers = async () => {
    return await fetch('https://dummyjson.com/users?limit=9')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data?.users;
        });
};

export {
    allUsers,
}
