"use client"
import React, {useState} from "react";
import FormAddNewRole from "@/components/feature/admin_panel/content/role/formAddNewRole";
import DataTableRoles from "@/components/feature/admin_panel/content/role/dataTableRoles";
import getTitle from "@/services/tableTitle";
import {Prisma} from "@prisma/client";

// custom type for roles because we don't use createdAt and updatedAt column from prisma model
type Roles = {
    id:number,
    name:string,
    desc:string,
}

export default function PaginationFilter({roles}:{roles: Roles[]}){
    // get filtering pagination data showed in table
    const [value, setValue] = useState(5);
    // get table column name from database table in this case is role table.
    const title = getTitle(Prisma.RoleScalarFieldEnum,["createdAt","updatedAt"]);
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
                {/*add new role component*/}
                <FormAddNewRole/>
            </div>
            {/*Content Table*/}
            <DataTableRoles roles={roles} title={title} pageSize={value} action={true}/>
        </>
    )
}