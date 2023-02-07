const data = {
    users: [
    {
    name: 'John',
    email: 'admin@example.com',
    password:'123456',
    isAdmin: true,
    },
    {
    name: 'Jane',
    email: 'user@example.com',
    password:'123456',
    isAdmin: false,
    },
    ]}
    const getLastArrItem = () => {
    console.log(`Last element is ${data[0]}`);
    }
    getLastArrItem(data);