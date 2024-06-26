import React from "react";
import Sidebar from "@/components/feature/admin_panel/template/sidebar";
import NavbarAdmin from "@/components/feature/admin_panel/template/navbarAdmin";

export default function DashboardLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className={"flex w-full"}>
            <aside className={"z-20 hidden w-64 overflow-y-auto bg-white  md:block flex-shrink-0 h-screen border-r-2 border-slate-100"}>
                <Sidebar/>
            </aside>
            <div className={"w-full flex-1 flex flex-col"}>
                <NavbarAdmin/>
                <div className={"w-full bg-slate-100 h-full"}>
                    {children}
                </div>
            </div>

        </section>
    );
}
