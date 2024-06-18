"use client"
import Image from "next/image";
import {useState} from "react";

export default function SinglePage() {
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

    return(
        <div className={"flex flex-col lg:flex-row gap-16 justify-between px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"}>
            {/*Image product*/}
            <div className={"w-full lg:w-1/2 lg:sticky top-20 h-max"}>
                <div className={"h-[500px] relative"}>
                    <Image
                        src={image[index].image}
                        alt="Big Image"
                        fill
                        sizes={"50vw"}
                        className={"object-cover rounded-lg"}
                    />
                </div>
                <div className={"flex gap-4"}>
                    {image.map(image => (
                        <div
                            className={"w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"}
                            key={image.id}
                            onClick={() => {setIndex(image.id-1)}}
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
            <div className={"w-full lg:w-1/2 flex flex-col gap-6"}>for description</div>
        </div>
    )
}