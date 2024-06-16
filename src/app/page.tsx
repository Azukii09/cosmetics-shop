import Slider from "@/components/feature/slider";
import ProductSection from "@/components/feature/productSection";
import CategoriesSection from "@/components/feature/categoriesSection";

export default function HomePage() {
  return (
    <main>
        <Slider/>
        <ProductSection title={"Featured Products"}/>
        <CategoriesSection/>
        <ProductSection title={"New Incoming Products"}/>
    </main>
  );
}
