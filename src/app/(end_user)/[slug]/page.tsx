"use client"
import Image from "next/image";
import {useState} from "react";
import ListComponent from "@/components/components/listComponent";
import Button from "@/components/tokens/button";

export default function SinglePage() {

    const filterData = [
        {
            id: 1,
            name:"tes 1",
        },
        {
            id: 2,
            name:"tes 2",
        },
    ]

    // for handling images
    const image = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/14716056/pexels-photo-14716056.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/14716151/pexels-photo-14716151.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
    ]

    const [index, setIndex] = useState(0);

    // handling quantity stock
    // Temporary
    const stock = 6;
    const [number, setNumber] = useState(1);

    const handlerStock = (event:"d"|"i") =>{
        if (event === "d" && number >1){
            setNumber((prevState) => prevState - 1);
        }else if(event === "i" && number <stock){
            setNumber((prevState) => prevState + 1);
        }
    }

    return (
        <div className="lg:sticky flex flex-col gap-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <div className={"flex flex-col lg:flex-row gap-16 justify-between"}>
                {/*Image product*/}
                <div className={"w-full pt-4 lg:w-1/2 lg:sticky top-20 h-max"}>
                    <div className={"h-[500px] relative"}>
                        <Image
                            src={image[index].image}
                            alt="Big Image"
                            fill
                            sizes={"50vw"}
                            className={"object-cover rounded-lg pt_4"}
                        />
                    </div>
                    <div className={"flex gap-4 overflow-x-scroll"}>
                        {image.map(image => (
                            <div
                                className={"w-1/3 sm:w-1/4 h-32 relative gap-4 mt-8 cursor-pointer flex-shrink-0"}
                                key={image.id}
                                onClick={() => {
                                    setIndex(image.id - 1)
                                }}
                            >
                                <Image
                                    src={image.image}
                                    alt="Big Image"
                                    fill
                                    sizes={"30vw"}
                                    className={"object-cover rounded-lg"}
                                />
                            </div>
                        ))}

                    </div>
                </div>
                {/*Description for product*/}
                <div className={"w-full lg:w-1/2 flex flex-col gap-6"}>
                    {/*Product tittle*/}
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className={"text-3xl text-slate-600 font-medium"}>Product Tittle</h1>
                            <h6 className={"text-slate-400 text-sm"}>Sub-Tittle</h6>
                        </div>
                        <div className={"w-full "}>
                            <ListComponent list={filterData} ulClass={"flex gap-4"}
                                           itemClass={"px-4 py-2 rounded-md btn-line"}/>
                        </div>
                    </div>
                    {/*Line after tittle*/}
                    <div className={"w-full h-[2px] bg-slate-100"}></div>
                    {/*Price tag*/}
                    <div className={"flex gap-4 font-medium items-center justify-between"}>
                        <div className={"flex gap-6 font-medium items-center"}>
                            <span className={"text-slate-300 line-through text-2xl"}>$86</span>
                            <span className={"text-slate-600 text-3xl"}>$68.8</span>
                        </div>
                        <span className={"text-white text-sm bg-secondary py-1 px-2 rounded-2xl"}>Discount 20%</span>
                    </div>
                    {/*Line after price tag*/}
                    <div className={"w-full h-[2px] bg-slate-100"}></div>
                    {/*User interactions*/}
                    <div className={"my-4 flex flex-col gap-8 px-2"}>
                        {/*Top*/}
                        <div className={"flex flex-col gap-4"}>
                            <h1 className={"text-slate-600"}>Color</h1>
                            <div className={"flex items-center gap-3"}>
                                <div
                                    className={"w-8 h-8 rounded-full ring-1 ring-info cursor-pointer relative bg-red-500"}>
                                    <div
                                        className={"absolute w-10 h-10 rounded-full ring-2 ring-info top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}></div>
                                </div>
                                <div
                                    className={"w-8 h-8 rounded-full ring-1 ring-info cursor-pointer relative bg-blue-500"}></div>
                                <div
                                    className={"w-8 h-8 rounded-full ring-1 ring-info cursor-not-allowed relative bg-green-500 opacity-50"}>
                                    <div
                                        className={"absolute w-10 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}></div>
                                </div>
                            </div>
                        </div>
                        {/*Middle*/}
                        <div className={"flex flex-col gap-4"}>
                            <h1>Variant</h1>
                            <div className={"flex gap-2 flex-wrap"}>
                                <Button typeName={"button"} className={"btn-line py-1 px-2 rounded-xl"} name={"Variant 1"}/>
                                <Button typeName={"button"} className={"btn-line py-1 px-2 rounded-xl"}
                                        name={"Variant 2"}/>
                                <Button typeName={"button"} className={"btn-line py-1 px-2 rounded-xl"} name={"Variant 3"}/>
                                <Button typeName={"button"} className={"btn-line py-1 px-2 rounded-xl"} name={"Variant 4"}/>
                                <Button typeName={"button"} className={"btn-line py-1 px-2 rounded-xl"} name={"Variant 5"}/>
                                <Button typeName={"button"} className={"btn-line py-1 px-2 rounded-xl"}
                                        name={"Variant 6"}/>
                                <Button typeName={"button"} className={"btn-line py-1 px-2 rounded-xl"} name={"Variant 7"}/>
                                <Button typeName={"button"} className={"btn-line py-1 px-2 rounded-xl"} name={"Variant 8"}/>
                            </div>
                        </div>
                        {/*Bottom*/}
                        <div>
                            <h1 className={"text-slate-600"}>Quantity</h1>
                            <div className={"flex gap-6 justify-between mt-4"}>
                                <div className={"flex gap-4"}>
                                    <div
                                        className={"flex gap-8 rounded-3xl bg-slate-100 items-center px-4 text-slate-600"}>
                                        <button onClick={() => handlerStock("d")}>-</button>
                                        {number}
                                        <button onClick={() => handlerStock("i")}>+</button>
                                    </div>
                                    <p className={"text-sm text-slate-600"}>Only <span
                                        className={"text-warning"}>{stock} items</span> left!<br/>{`Don't`} miss it!</p>
                                </div>
                                <div>
                                    <Button typeName={"button"} className={"rounded-3xl py-2 px-5 btn-primary"}
                                            name={"Add to Cart"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Line after user interactions*/}
                    <div className={"w-full h-[2px] bg-slate-100"}></div>
                    {/*Description*/}
                    <div className={"my-4 flex flex-col gap-8 px-2"}>
                        {/*Top*/}
                        <div className={"flex flex-col gap-4"}>
                            <h1 className={"text-slate-600 font-medium"}>Tittle</h1>
                            <div className={"flex items-center gap-3"}>
                                <div className={"text-slate-400"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, atque debitis
                                    deleniti, dolorum esse eveniet impedit in laboriosam modi nesciunt nihil nulla
                                    numquam quidem quis quos rem sapiente, sed sunt? Aliquam aut dolore doloremque ea eos harum ipsam maiores modi nemo odit officia omnis pariatur, praesentium qui quo recusandae tempore voluptatum? Commodi dolores
                                    laudantium nemo nulla officiis quasi similique suscipit. Animi atque delectus distinctio dolor dolorum eaque, eius eos incidunt ipsa labore
                                    laudantium magnam nihil nostrum numquam odio odit perferendis perspiciatis provident
                                    quisquam quod ratione repellat similique suscipit veniam veritatis.
                                </div>
                            </div>
                        </div>
                        {/*Middle*/}
                        <div className={"flex flex-col gap-4"}>
                            <h1 className={"text-slate-600 font-medium"}>Tittle</h1>
                            <div className={"flex items-center gap-3"}>
                                <div className={"text-slate-400"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Architecto, atque debitis
                                    deleniti, dolorum esse eveniet impedit in laboriosam modi nesciunt nihil nulla
                                    numquam quidem quis quos rem sapiente, sed sunt? Aliquam aut dolore doloremque ea
                                    eos harum ipsam maiores modi nemo odit officia omnis pariatur, praesentium qui quo
                                    recusandae tempore voluptatum? Commodi dolores
                                    laudantium nemo nulla officiis quasi similique suscipit. Animi atque delectus
                                    distinctio dolor dolorum eaque, eius eos incidunt ipsa labore
                                    laudantium magnam nihil nostrum numquam odio odit perferendis perspiciatis provident
                                    quisquam quod ratione repellat similique suscipit veniam veritatis.
                                </div>
                            </div>
                        </div>
                        {/*Bottom*/}
                        <div className={"flex flex-col gap-4 font-medium"}>
                            <h1 className={"text-slate-600"}>Tittle</h1>
                            <div className={"flex items-center gap-3"}>
                                <div className={"text-slate-400"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Architecto, atque debitis
                                    deleniti, dolorum esse eveniet impedit in laboriosam modi nesciunt nihil nulla
                                    numquam quidem quis quos rem sapiente, sed sunt? Aliquam aut dolore doloremque ea
                                    eos harum ipsam maiores modi nemo odit officia omnis pariatur, praesentium qui quo
                                    recusandae tempore voluptatum? Commodi dolores
                                    laudantium nemo nulla officiis quasi similique suscipit. Animi atque delectus
                                    distinctio dolor dolorum eaque, eius eos incidunt ipsa labore
                                    laudantium magnam nihil nostrum numquam odio odit perferendis perspiciatis provident
                                    quisquam quod ratione repellat similique suscipit veniam veritatis.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}