import Slider from "@/components/feature/end_user/content/slider";
import ProductSection from "@/components/feature/end_user/content/productSection";
import CategoriesSection from "@/components/feature/end_user/content/categoriesSection";
import {getProducts} from "../../services/data/productList";
import Navbar from "@/components/feature/end_user/template/navbar";
import Footer from "@/components/feature/end_user/template/footer";

export default function HomePage() {
  return (
    <main>
        <Navbar/>
        <Slider/>
        <ProductSection title={"Featured Products"} data={getProducts()}/>
        <CategoriesSection/>
        <ProductSection title={"New Incoming Products"} data={getProducts()}/>
        <Footer/>
    </main>
  );
}
