import {getProducts} from "@/data/productList";
import ProductList from "@/components/components/productList/listProduct";

export default function ProductSection() {
    const data = getProducts()

    // this is for format currency base on code
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits:0,
    });
    return(
        <div className={"mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"}>
            <h1 className={"text-2xl"}>Featured Products</h1>
            <div className={"mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap"}>
                {data.map(item =>(
                    <ProductList
                        fImg={item.fImg}
                        sImg={item.sImg}
                        productName={item.productName}
                        price={formatter.format(item.price)}
                        description={item.description}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    )
}