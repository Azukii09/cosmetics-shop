import React from "react";
import Sidebar from "@/components/feature/sidebar";

export default function DashboardLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className={"flex w-full"}>
            <aside className={"z-20 hidden w-64 overflow-y-auto bg-white  md:block flex-shrink-0 h-screen"}>
                <Sidebar/>
            </aside>
            <div className={"w-full flex-1 flex"}> {children}</div>

        </section>
    );
}
