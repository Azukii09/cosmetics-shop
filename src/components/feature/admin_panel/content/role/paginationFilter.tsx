"use client"
import React, {useState} from "react";
import FormAddNewRole from "@/components/feature/admin_panel/content/role/formAddNewRole";
import DataTableRoles from "@/components/feature/admin_panel/content/role/dataTableRoles";

type Roles = {
    id:number,
    name:string,
    desc:string,
}

export default function PaginationFilter({roles}:{roles: Roles[]}){
    const [value, setValue] = useState(5);
    const title = [
        {
            id:1,
            name:"No"
        },
        {
            id:2,
            name:"Name"
        },
        {
            id:3,
            name:"Description"
        },
    ]

    return (
        <>
            <div className={"p-4 flex justify-between"}>
                <select
                    value={value}
                    onChange={(e) => {
                        setValue(Number(e.target.value));
                    }}
                    className={"block w-20 shadow-sm shadow-info mt-1 font-semibold text-secondary form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple py-2 px-4 rounded-xl"}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                <FormAddNewRole/>
            </div>
            {/*Content Table*/}
            <DataTableRoles roles={roles} title={title} pageSize={value} action={true}/>
        </>
    )
}