import Button from "@/components/tokens/button";
import Image from "next/image";
import ProductSection from "@/components/feature/productSection";
import {getProducts} from "@/data/productList";
import FilterSection from "@/components/feature/filterSection";

export default function ListPage() {
    return (
        <div className={"px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"}>
            {/*Campaign*/}
            <div className={"hidden sm:flex bg-info px-4 justify-between h-64"}>
                {/*Text container*/}
                <div className={"w-2/3 flex flex-col items-center justify-center gap-8"}>
                    <h1 className={"text-4xl font-semibold leading-[48px] text-slate-600"}>
                        Grab up to 50% off on <br/>
                        Selected Products
                    </h1>
                    <Button typeName={"button"} className={"btn-primary rounded-3xl px-5 py-3 font-medium"}
                            name={"Buy Now!"}/>
                </div>
                {/*Image container*/}
                <div className={"relative w-1/3"}>
                    <Image src={"/assets/img/woman.png"} alt={"woman campaign"} fill className={"object-contain"}/>
                </div>
            </div>
            {/*Filter*/}
            <FilterSection/>
            {/*filtered products*/}
            <ProductSection title={"Foundation"} data={getProducts()}/>
        </div>
    );
}