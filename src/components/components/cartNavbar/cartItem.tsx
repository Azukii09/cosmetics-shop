import Image from "next/image";

export default function CartItem() {
    return (
        <div className={"flex gap-4"}>
            {/*Product image*/}
            <Image
                src={"https://images.pexels.com/photos/8140898/pexels-photo-8140898.jpeg?auto=compress&cs=tinysrgb&w=800"}
                alt={"product"}
                width={72}
                height={96}
                className={"object-cover rounded-md"}
            />
            {/*Product description*/}
            <div className={"flex flex-col justify-between w-full"}>
                {/*Top*/}
                <div>
                    {/*Tittle*/}
                    <div className={"flex items-center justify-between gap-8"}>
                        <h3 className={"font-semibold"}>Product Name</h3>
                        <span className={"p-1 bg-slate-100 rounded-md"}>$49</span>
                    </div>
                    {/*Description*/}
                    <div className={"text-sm text-slate-500"}>
                        Available
                    </div>
                </div>
                {/*Bottom*/}
                <div className={"flex items-center justify-between gap-8 text-sm"}>
                    <span className={"text-slate-500"}>Qty. 2</span>
                    <span className={"text-blue-500"}>remove</span>
                </div>
            </div>
        </div>
    )
}