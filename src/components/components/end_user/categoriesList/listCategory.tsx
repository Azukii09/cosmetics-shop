import Image from "next/image";
import Link from "next/dist/client/link";

export default function ListCategory(props: {
    name:string;
    img:string;
    href:string;
}) {
    return(
        <Link href={props.href} className={"w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"}>
            <div className={"relative w-full h-96 bg-slate-100"}>
                <Image
                    src={props.img}
                    alt={"cover img"}
                    fill
                    sizes="20vw"
                    className={"object-cover rounded-md"}
                />
            </div>
            <h1 className={"mt-8 font-light text-lg tracking-wide"}>{props.name}</h1>
        </Link>
    )
}