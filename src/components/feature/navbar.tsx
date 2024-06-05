"use client"
import Hamburger from "@/components/tokens/hamburger";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/tokens/button";
import {signIn} from "next-auth/react";

export default function Navbar(){
    const [state, setState] = useState(false);
    const [hamburger, setHamburger] = useState("");
    const HandleHamburger = () => {
        setHamburger("hamburger-active");
        setState(!state);
    }
    const logo = "/assets/img/keaLogo.png";

    return(
        <nav className="py-5 px-4 bg-slate-600 flex items-center justify-between">
            <div className="flex items-center justify-between relative">
                <Hamburger
                    handler={HandleHamburger}
                    action={state ? hamburger + " block absolute lg:hidden":"block absolute lg:hidden"}
                />
                <Link href={"/dashboard"} className="lg:flex hidden items-center justify-between">
                    <Image
                        src={logo}
                        alt={"..."}
                        width={100}
                        height={100}
                    />
                </Link>

            </div>
            <div>
                <Button typeName={"button"} className={"btn btn-info"} name={"Login"} handler={() => signIn("credentials")} />
            </div>
        </nav>
    )
}