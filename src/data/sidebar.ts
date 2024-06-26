const sidebarData = [
    {
        id:1,
        name:"User Master",
        linkTo: "/admin/user",
        icon:"/assets/img/static/prof-list-b.png",
        iconW:"/assets/img/static/prof-list-w.png",
    },
    {
        id:2,
        name:"Role Master",
        linkTo: "/admin/role",
        icon:"/assets/img/static/key-b.png",
        iconW:"/assets/img/static/key-w.png",
    },
    {
        id: 3,
        name: "Warehouse Master",
        linkTo: "/admin/warehouse",
        icon:"/assets/img/static/warehouse-b.png",
        iconW:"/assets/img/static/warehouse-w.png",
    },
    {
        id:4,
        name:"Item's Master",
        linkTo: "/admin/item",
        icon:"/assets/img/static/item-b.png",
        iconW:"/assets/img/static/item-w.png",
    },
    {
        id:5,
        name:"Categories Master",
        linkTo: "/admin/categories",
        icon:"/assets/img/static/category-b.png",
        iconW:"/assets/img/static/category-w.png",
    },
    {
        id:6,
        name:"Type Master",
        linkTo: "/admin/type",
        icon:"/assets/img/static/type-b.png",
        iconW:"/assets/img/static/type-w.png",
    },
    {
        id:7,
        name:"Storefront Management",
        linkTo: "/admin/storefront-management",
        icon:"/assets/img/static/storefront-b.png",
        iconW:"/assets/img/static/storefront-w.png",
    },
]

export const getSidebar = () => {
    return sidebarData;
}