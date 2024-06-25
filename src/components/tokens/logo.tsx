import Link from "next/link";

export default function Logo(props:{
    link:string;
}){
    return(
        <Link href={props.link}>
            <span className={"text-2xl tracking-wide"}>
                LOGO
            </span>
        </Link>
    )
}