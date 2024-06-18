"use client"
import MenuMobile from "@/components/components/end_user/menuMobile";
import Logo from "@/components/tokens/logo";
import NavSearchBar from "@/components/feature/end_user/template/navSearchBar";
import NavIcon from "@/components/feature/end_user/template/navIcon";
import {getNavbar} from "@/data/navbar";
import ListComponent from "@/components/components/listComponent";
import {useEffect, useState} from "react";

export default function Navbar(){
    const [heading, setHeading] = useState(false);

    const scrollHeader = ()=>{
        if(window.scrollY > 20){
            setHeading(true);
        }else {
            setHeading(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", scrollHeader);
        return ()=>{
            window.addEventListener("scroll", scrollHeader);
        }
    },[])

    return (
        <>
            <nav
                className={heading ?
                    "fixed z-30 bg-gradient-to-t from-info to-white w-full h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 shadow-[rgba(0,0,0,0.2)_0px_2px_3px_0px] opacity-90" :
                    "h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative"}>
                {/*Mobile*/}
                <div className="h-full flex items-center justify-between md:hidden">
                    <Logo/>
                    <MenuMobile/>
                </div>
                {/*bigger screen*/}
                <div className={"hidden md:flex items-center h-full justify-between gap-8"}>
                    {/*Left*/}
                    <div className={"w-1/3 xl:w-1/2 flex items-center justify-between"}>
                        <Logo/>
                        <ListComponent list={getNavbar()} ulClass={"hidden xl:flex"} itemClass={"px-4"}/>
                    </div>
                    {/*Right*/}
                    <div className={"w-2/3 flex items-center justify-between gap-8 xl:w-1/2"}>
                        <NavSearchBar/>
                        <NavIcon/>
                    </div>
                </div>
            </nav>
            <div className={heading ? "h-20" : ""}></div>
        </>
    )
}