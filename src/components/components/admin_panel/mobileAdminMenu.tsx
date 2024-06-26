"use client"

import React, {useState} from "react";
import Image from "next/image";
import {getSidebar} from "@/data/sidebar";
import Link from "next/dist/client/link";
import {usePathname} from "next/navigation";

export default function MobileAdminMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menu = getSidebar()
    const pathname = usePathname();
    return(
        <div>
            <Image
                src={"/assets/img/static/menu.png"}
                alt={"menu"}
                width={28}
                height={28}
                className={"cursor-pointer"}
                onClick={() => setIsOpen((prev) => !prev)}
            />{
            isOpen && (
                <>
                    <ul className={"absolute top-20 bg-secondary text-white left-0 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10"}>
                        {menu.map((item) => (
                            <li className={pathname === item.linkTo? "relative px-6 py-3 w-full bg-contras":"relative px-6 py-3 w-full hover:bg-contras"} key={item.id}>
                                <Link href={item.linkTo}
                                      className={"inline-flex items-center w-full font-bold text-white transition-colors duration-150"}>
                                    <Image src={item.iconW} alt={"icon"} width={16} height={16}/>
                                    <span className="ml-4">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )
        }
        </div>
    )
}