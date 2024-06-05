const user = [
    {
        email: 'user@mail.com',
        password: 'password',
    },
    {
        email: 'admin@mail.com',
        password: 'password',
    },
    {
        email: 'gege@mail.com',
        password: 'password',
    },
    {
        email: 'owner@mail.com',
        password: 'password',
    },
]

export const getUsers = (email: string) => {
    return user.find(user => user.email === email);
}