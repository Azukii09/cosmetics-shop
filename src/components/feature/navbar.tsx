"use client"
import MenuMobile from "@/components/components/menuMobile";
import Logo from "@/components/tokens/logo";
import NavSearchBar from "@/components/feature/navSearchBar";
import NavIcon from "@/components/feature/navIcon";
import {getNavbar} from "@/data/navbar";
import ListComponent from "@/components/components/listComponent";

export default function Navbar(){


    return(
        <nav className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
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
    )
}