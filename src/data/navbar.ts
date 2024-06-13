const navData = [
    {
        id:1,
        name:"Homepage",
        linkTo: "/",
    },
    {
        id:2,
        name:"Shop",
        linkTo: "/list"
    },
    {
        id:3,
        name:"Deals",
        linkTo: "/list"
    },
    {
        id:4,
        name:"About",
        linkTo: "/list"
    },
    {
        id:5,
        name:"Contacts",
        linkTo: "/list"
    },
]

export const getNavbar = () => {
    return navData;
}