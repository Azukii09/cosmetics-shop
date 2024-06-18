const navData = [
    {
        id:1,
        name:"Homepage",
        linkTo: "/",
    },
    {
        id:2,
        name:"Shop",
        linkTo: "/shop"
    },
    {
        id:3,
        name:"Deals",
        linkTo: "/deals"
    },
    {
        id:4,
        name:"About",
        linkTo: "/about"
    },
    {
        id:5,
        name:"Contacts",
        linkTo: "/contacts"
    },
]

export const getNavbar = () => {
    return navData;
}