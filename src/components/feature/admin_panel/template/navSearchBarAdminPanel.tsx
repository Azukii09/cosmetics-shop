"use client"
import Image from "next/image";
import React from "react";
import {useRouter} from "next/navigation";

export default function NavSearchBarAdminPanel() {
    const router = useRouter();
    const handlerSearch = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const search = formData.get("search") as string;
        if(search){
            router.push(`/list?search=${search}`);
        }
    }
    return(
        <form className="w-full flex flex-1 items-center justify-between bg-slate-100 p-2 rounded-md" onSubmit={handlerSearch}>
            <input
                type="text"
                name="search"
                placeholder={"Search"}
                className={"flex flex-1 bg-transparent border-none rounded-md focus:outline-none"}
            />
            <button type="submit">
                <Image
                    src={"/assets/img/static/search.png"}
                    alt={"search"}
                    width={16}
                    height={16}
                />
            </button>
        </form>
    )
}