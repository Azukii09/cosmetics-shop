import Image from "next/image";
import Button from "@/components/tokens/button";
import Link from "next/dist/client/link";

export default function ProductList(props: {
    fImg:string;
    sImg:string;
    productName:string;
    price:string;
    description:string;
}) {
    return(
        <Link href={"/"} className={"w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"}>
            <div className={"relative w-full h-72"}>
                <Image
                    src={props.fImg}
                    alt={"cover img"}
                    fill
                    sizes="25vw"
                    className={"absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"}
                />
                <Image
                    src={props.sImg}
                    alt={"second layer img"}
                    fill
                    sizes="25vw"
                    className={"absolute object-cover rounded-md"}
                />
            </div>
            <div className={"flex justify-between"}>
                <span className={"font-medium"}>{props.productName}</span>
                <span className={"font-semibold"}>{props.price}</span>
            </div>
            <div className={"overflow-y-scroll h-16 scrollbar-hide"}>
                <p className={"text-sm text-slate-600 text-justify"}>{props.description}</p>
            </div>
            <Button typeName={"button"} className={"btn-line w-max rounded-3xl px-2 py-1"} name={"Add to Cart"}/>
        </Link>
    )
}