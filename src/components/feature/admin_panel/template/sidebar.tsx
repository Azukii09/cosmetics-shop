"use client"
import React from "react";
import Logo from "@/components/tokens/logo";
import Link from "next/dist/client/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {getSidebar} from "../../../../../services/data/sidebar";

export default function Sidebar(){
    const menu = getSidebar()
    const router = usePathname();
    return (
        <section className={"w-64 overflow-y-auto flex flex-col"}>
            <div className={"w-full h-20 flex items-center justify-center"}>
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