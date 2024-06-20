import React from "react";
import Navbar from "@/components/feature/end_user/template/navbar";
import Footer from "@/components/feature/end_user/template/footer";

export default function EndUserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <Navbar/>
            {children}
            <Footer/>
        </section>
    );
}
