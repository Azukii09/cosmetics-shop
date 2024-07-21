"use client"

import {useState} from "react";
import Image from "next/image";
import ListComponent from "@/components/components/listComponent";
import {getNavbar} from "../../../../services/data/navbar";

export default function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);
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
                <ListComponent
                    list={getNavbar()}
                    ulClass={"absolute top-20 bg-slate-600 text-white left-0 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10"}
                />
            )
        }
        </div>
    )
}