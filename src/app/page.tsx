import Slider from "@/components/feature/slider";
import ProductSection from "@/components/feature/productSection";
import CategoriesSection from "@/components/feature/categoriesSection";
import {getProducts} from "@/data/productList";

export default function HomePage() {
  return (
    <main>
        <Slider/>
        <ProductSection title={"Featured Products"} data={getProducts()}/>
        <CategoriesSection/>
        <ProductSection title={"New Incoming Products"} data={getProducts()}/>
    </main>
  );
}
