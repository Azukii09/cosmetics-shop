"use client"

import NavSearchBar from "@/components/feature/end_user/template/navSearchBar";
import NavIcon from "@/components/feature/end_user/template/navIcon";
import MobileAdminMenu from "@/components/components/admin_panel/mobileAdminMenu";

export default function NavbarAdmin(){
    return (
        <>
            <nav className={"w-full h-20 flex items-center justify-between"}>
                {/*mobile*/}
                <div className="h-20 w-full px-4 flex items-center justify-between md:hidden shadow-md">
                    <MobileAdminMenu/>
                    <div className={"w-1/2 flex items-center justify-between gap-8"}>
                        <NavSearchBar/>
                        <NavIcon/>
                    </div>
                </div>
                {/*bigger screen*/}
                <div className={"hidden md:w-full md:flex items-center h-full justify-between gap-8 shadow-md"}>
                    {/*Left*/}
                    <div className={"w-1/2 xl:w-1/2 flex items-center justify-center px-8"}>
                        <NavSearchBar/>
                    </div>
                    <div className={"px-8"}>
                        <NavIcon/>
                    </div>
                </div>
            </nav>
        </>
    )
}