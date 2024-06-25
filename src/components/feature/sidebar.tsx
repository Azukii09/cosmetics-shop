"use client"
import React from "react";
import ListComponent from "@/components/components/listComponent";
import Logo from "@/components/tokens/logo";

export default function Sidebar(){
    const menu = [
        {
            id:1,
            name:"Profile",
            linkTo: "/dashboard/profile",
        },
        {
            id:2,
            name:"Master Role",
            linkTo: "/dashboard/role",
        },
        {
            id: 3,
            name: "Master User",
            linkTo: "/dashboard/user",
        },
        {
            id:4,
            name:"Email",
            linkTo: "/dashboard/email",
        },
        {
            id:5,
            name:"Email Template",
            linkTo: "/dashboard/template",
        },
    ]
    return (
        <section className={"w-64 overflow-y-auto flex flex-col items-center justify-center"}>
            <Logo link={"/admin/dashboard"}/>
            <ListComponent
                ulClass={"mt-6"}
                itemClass={"relative px-6 py-3 text-primary font-bold"}
                list={menu}
            />
        </section>
    )
}