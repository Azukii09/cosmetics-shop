"use client"
import {getSlider} from "../../../../../services/data/slider";
import { useState} from "react";
import Button from "@/components/tokens/button";
import {useRouter} from "next/navigation";
import Image from "next/image";

export default function Slider(){
    const data = getSlider()
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);

    // this code is for run slider automatic for 3 second interval
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setCurrentIndex((prev) => (prev === data.length -1 ? 0 : prev+1))
    //     },3000);
    //
    //     return () => clearInterval(interval);
    // },[])

    return(
        <div className={"h-[calc(100vh-80px)] overflow-hidden"}>
            <div
                className={"w-max h-full flex transition-all ease-in-out duration-1000"}
                style={{transform: `translateX(-${currentIndex*100}vw)`}}
            >
                {data.map(item =>(
                    <div className={`${item.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={item.id}>
                        {/*Text container*/}
                        <div className={"h-1/2 xl:w-1/2 xl:h-full flex items-center justify-center flex-col gap-8 xl:gap-12 text-center"}>
                            <h2 className={"text-xl lg:text-3xl 2xl:text-5xl"}>{item.description}</h2>
                            <h1 className={"text-5xl lg:text-6xl 2xl:text-8xl font-semibold"}>{item.title}</h1>
                            <Button typeName={"button"} className={"btn btn-line"} name={"Shop Now"} handler={()=>router.push(item.url)}/>
                        </div>
                        {/*image container*/}
                        <div className={"h-1/2 xl:w-1/2 xl:h-full relative"}>
                            <Image src={item.img} alt={""} fill sizes="100%" className={"object-cover"} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={"absolute m-auto left-1/2 bottom-8 flex gap-4"}>
                {data.map((item,index) =>(
                    <div
                        className={`w-3 h-3 rounded-full ring-1 ring-primary cursor-pointer flex items-center justify-center ${currentIndex === index ? "scale-150":""}`}
                        key={item.id}
                        onClick={()=>setCurrentIndex(index)}
                    >
                        {currentIndex === index && (
                            <div className={"w-[6px] h-[6px] rounded-full bg-primary"}></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}