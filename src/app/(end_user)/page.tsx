import Slider from "@/components/feature/end_user/content/slider";
import ProductSection from "@/components/feature/end_user/content/productSection";
import CategoriesSection from "@/components/feature/end_user/content/categoriesSection";
import {getProducts} from "@/data/productList";

export default function EndUserHomePage() {
    return (
        <>
            <Slider/>
            <ProductSection title={"Featured Products"} data={getProducts()}/>
            <CategoriesSection/>
            <ProductSection title={"New Incoming Products"} data={getProducts()}/>
        </>
    );
}
