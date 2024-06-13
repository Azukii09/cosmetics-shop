"use client"
import MenuMobile from "@/components/components/menuMobile";
import Logo from "@/components/tokens/logo";

export default function Navbar(){


    return(
        <nav className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/*Mobile*/}
            <div className="h-full flex items-center justify-between md:hidden">
                <Logo/>
                <MenuMobile/>
            </div>
            {/*md screen*/}
            <div className={"hidden md:flex items-center h-full justify-between gap-8"}>
                {/*Left*/}
                <div className={"w-1/3"}>
                    <Logo/>
                </div>
                {/*Right*/}
                <div className={"w-2/3"}>tes</div>
            </div>
            {/*<ListComponent list={getNavbar()} ulClass={"flex"} itemClass={"px-4"}/>*/}
        </nav>
    )
}