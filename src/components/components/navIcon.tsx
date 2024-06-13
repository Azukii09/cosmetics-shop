"use client"
import Image from "next/image";

export default function NavIcon() {
    return(
        <div className="flex items-center gap-4 xl:gap-6">
            <Image src={"/assets/img/profile.png"} alt={"profile"} width={22} height={22} className={"cursor-pointer"}/>
            <Image src={"/assets/img/notification.png"} alt={"notification"} width={22} height={22} className={"cursor-pointer"}/>
            <Image src={"/assets/img/cart.png"} alt={"cart"} width={22} height={22} className={"cursor-pointer"}/>
        </div>
    )
}