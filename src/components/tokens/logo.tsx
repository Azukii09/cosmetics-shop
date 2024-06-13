import Link from "next/link";

export default function Logo(){
    return(
        <Link href={"/"}>
            <span className={"text-2xl tracking-wide"}>
                LOGO
            </span>
        </Link>
    )
}