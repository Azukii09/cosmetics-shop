"use client"

import MobileAdminMenu from "@/components/components/admin_panel/mobileAdminMenu";
import NavIconAdminPanel from "@/components/feature/admin_panel/template/navIconAdminPanel";
import NavSearchBarAdminPanel from "@/components/feature/admin_panel/template/navSearchBarAdminPanel";

export default function NavbarAdmin(){
    return (
        <>
            <nav className={"w-full h-20 flex items-center justify-between"}>
                {/*mobile*/}
                <div className="h-20 w-full px-4 flex items-center justify-between md:hidden shadow-md">
                    <MobileAdminMenu/>
                    <div className={"w-1/2 flex items-center justify-between gap-8"}>
                        <NavSearchBarAdminPanel/>
                        <NavIconAdminPanel/>
                    </div>
                </div>
                {/*bigger screen*/}
                <div className={"hidden md:w-full md:flex items-center h-full justify-between gap-8 shadow-md"}>
                    {/*Left*/}
                    <div className={"ml-24 w-1/2 xl:w-1/2 flex items-center justify-center px-16"}>
                        <NavSearchBarAdminPanel/>
                    </div>
                    <div className={"px-8"}>
                        <NavIconAdminPanel/>
                    </div>
                </div>
            </nav>
        </>
    )
}