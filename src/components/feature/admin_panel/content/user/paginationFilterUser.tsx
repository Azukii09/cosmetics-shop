"use client"
import React, {useState} from "react";
import getTitle from "@/services/tableTitle";
import {Prisma} from "@prisma/client";
import DataTableUsers from "@/components/feature/admin_panel/content/user/dataTableUsers";
import FormAddNewUsers from "@/components/feature/admin_panel/content/user/formAddNewUser";


// custom type for roles because we don't use createdAt and updatedAt column from prisma model
type Users = {
    id:number,
    name:string,
    email:string,
    password:string,
    address:string,
    roleId: number
    role: {
        id: number;
        name: string;
        desc: string;
    }
}

type Roles = {
    id:number,
    name:string,
    desc: string
}

export default function PaginationFilterUser({users,roles}:{users: Users[],roles:Roles[]}){
    // get filtering pagination data showed in table
    const [value, setValue] = useState(5);
    // get table column name from database table in this case is role table.
    const title = getTitle(Prisma.UserScalarFieldEnum,["createdAt","updatedAt","password"]);
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
                <FormAddNewUsers roles={roles}/>
            </div>
            {/*Content Table*/}
            <DataTableUsers users={users} roles={roles} title={title} pageSize={value} action={true}/>
        </>
    )
}