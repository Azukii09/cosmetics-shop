"use client"
import React from "react";
import ListComponent from "@/components/components/listComponent";

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
        <aside className={"w-64 bg-slate-600 overflow-y-auto"}>
            <ListComponent
                ulClass={"mt-6"}
                itemClass={"relative px-6 py-3 text-white font-bold"}
                list={menu}
            />
        </aside>
    )
}