"use client"
import React from "react";
import Logo from "@/components/tokens/logo";
import Link from "next/dist/client/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

export default function Sidebar(){
    // list of sidebar menu
    const menu = [
        {
            id:1,
            name:"User Master",
            linkTo: "/admin/user",
            icon:"/assets/img/static/prof-list-b.png"
        },
        {
            id:2,
            name:"Role Master",
            linkTo: "/admin/role",
            icon:"/assets/img/static/key-b.png"
        },
        {
            id: 3,
            name: "Warehouse Master",
            linkTo: "/admin/warehouse",
            icon:"/assets/img/static/warehouse-b.png"
        },
        {
            id:4,
            name:"Item's Master",
            linkTo: "/admin/item",
            icon:"/assets/img/static/item-b.png"
        },
        {
            id:5,
            name:"Categories Master",
            linkTo: "/admin/categories",
            icon:"/assets/img/static/category-b.png"
        },
        {
            id:6,
            name:"Type Master",
            linkTo: "/admin/type",
            icon:"/assets/img/static/type-b.png"
        },
        {
            id:7,
            name:"Storefront Management",
            linkTo: "/admin/storefront-management",
            icon:"/assets/img/static/storefront-b.png"
        },
    ]

    const router = usePathname();
    return (
        <section className={"w-64 overflow-y-auto flex flex-col"}>
            <div className={"w-full h-16 flex items-center justify-center"}>
                <Logo link={"/admin/dashboard"}/>
            </div>
            <ul className={"mt-6"}>
                {menu.map((item) => (
                    <li className={"relative px-6 py-3 w-full"} key={item.id}>
                        <span
                            className={router === item.linkTo ? "absolute inset-y-0 left-0 w-1 bg-secondary rounded-tr-lg rounded-br-lg":"hidden"}></span>
                        <Link href={item.linkTo}
                              className={"inline-flex items-center w-full font-bold text-primary transition-colors duration-150 hover:text-info"}>
                            <Image src={item.icon} alt={"icon"} width={16} height={16}/>
                            <span className="ml-4">{item.name}</span>
                        </Link>
                    </li>
                ))}

            </ul>
        </section>
    )
}