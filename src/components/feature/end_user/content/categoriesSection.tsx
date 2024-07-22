import {getCategories} from "../../../../../services/data/category";
import ListCategory from "@/components/components/end_user/categoriesList/listCategory";

export default function CategoriesSection() {
    const data = getCategories()

    return(
        <div className={"mt-12"}>
            <h1 className={"text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"}>Categories Products</h1>
            <div className={"px-4 overflow-x-scroll scrollbar-hide"}>
                <div className={"mt-12 flex gap-4 md:gap-8"}>
                    {data.map(item =>(
                        <ListCategory
                            name={item.nameCategory}
                            img={item.img}
                            href={item.href}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}