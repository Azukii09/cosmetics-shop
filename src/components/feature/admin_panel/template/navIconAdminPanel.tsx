"use client"
import Image from "next/image";
import React from "react";
import Link from "next/dist/client/link";
import {useRouter} from "next/navigation";

export default function NavIconAdminPanel() {
    const router = useRouter();
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);
    // temporary
    const isLoggedIn = true

    const handlerProfile = () => {
        if(!isLoggedIn){
            router.push("/login");
        }
        setIsProfileOpen((prevState) => !prevState);
    }
    return(
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src={"/assets/img/static/notification.png"} alt={"notification"} width={22} height={22} className={"cursor-pointer"}/>
            <Image
                src={"/assets/img/static/profile.png"}
                alt={"profile"}
                width={22}
                height={22}
                className={"cursor-pointer"}
                onClick={handlerProfile}
            />
            {isProfileOpen && (
                <div className="absolute bg-white p-4 rounded-md top-12 left-0 text-sm z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <Link href={"/"}>Profile</Link>
                    <div className={"mt-2 cursor-pointer"}>Log out</div>
                </div>
            )}
        </div>
    )
}