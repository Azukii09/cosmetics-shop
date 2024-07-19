import React, {useState} from "react";
import PaginationComponent from "@/components/components/paginationsComponent";
import FormDetailUser from "@/components/feature/admin_panel/content/user/formDetailUser";
import FormDeleteUser from "@/components/feature/admin_panel/content/user/formDeleteUser";


// custom type for users because we don't use createdAt and updatedAt column from prisma model
type Users = {
    id:number,
    name:string,
    email:string,
    password:string,
    address:string,
    roleId: number,
    role:{
        id:number,
        name:string,
        desc:string,
    }
}

type Roles = {
    id:number,
    name:string,
    desc: string
}

export default function DataTableUsers(props: {
    users: Users[]
    roles: Roles[]
    title: any[];
    pageSize: number;
    action:boolean;
}) {
    // for set current page state
    const [currentPageUsers, setCurrentPage] = useState(1);
    // for set how many row for listed data
    const pageSize = props.pageSize;

    // actions for change page states
    const onPageChange = (page:number) => {
        setCurrentPage(page);
    };

    // for show data that listed
    const paginate = (items:Users[], pageNumber:number, pageSize:number) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return items.slice(startIndex, startIndex + pageSize);
    };
    const data = paginate(props.users,currentPageUsers,pageSize)

    // handling modal add

    return (
        <>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                        <tr
                            className="text-xs font-semibold tracking-wide text-left text-info uppercase border-b bg-gray-50"
                        >
                            {/*fetching table title*/}
                            {props.title.map((item:{id:number, name:string}) => (
                                <th className="px-4 py-3" key={item.id}>{item.name}</th>
                            ))}
                            {props.action && (
                                <th className="px-4 py-3">
                                    <span className={"flex justify-center"}>Actions</span>
                                </th>
                            )}
                        </tr>
                        </thead>
                        <tbody
                            className="bg-white divide-y"
                        >
                        {data.map((item:any,index) => (
                            <tr className="text-gray-700" key={item.id}>
                                {/*fetching data*/}
                                <td className={"px-4 py-3"}>
                                    {
                                        index + 1 + ((currentPageUsers - 1) * pageSize)
                                    }
                                </td>
                                <td className={"px-4 py-3"}>
                                    {item.name}
                                </td>
                                <td className={"px-4 py-3"}>
                                    {item.email}
                                </td>
                                <td className={"px-4 py-3"}>
                                    {item.address}
                                </td>
                                <td className={"px-4 py-3"}>
                                    {item.role.name}
                                </td>
                                {props.action && (
                                    <td className="px-4 py-3 text-sm flex gap-2 justify-center">
                                        {/*form detail component*/}
                                        <FormDetailUser users={item}/>
                                        {/*/!*form edit component*!/*/}
                                        {/*<FormEditRole users={item}/>*/}
                                        {/*form delete component*/}
                                        <FormDeleteUser users={item}/>
                                    </td>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div
                    className="grid px-4 py-3 text-xs font-semibold tracking-wide text-info uppercase border-t bg-gray-50 sm:grid-cols-9"
                >
                <span className="flex items-center col-span-3">
                  {/*  show number of data*/}
                  Showing {((currentPageUsers-1)*pageSize)+1} - {(((currentPageUsers-1)*pageSize)+pageSize)<= props.users.length? (((currentPageUsers-1)*pageSize)+pageSize):props.users.length} of {props.users.length}
                </span>
                    <span className="col-span-2"></span>
                        {/*Pagination*/}
                        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                          <PaginationComponent
                              item={props.users.length}
                              pageSize={pageSize}
                              currentPage={currentPageUsers}
                              onPageChange={onPageChange}
                          />
                    </span>
                </div>
            </div>
        </>
    )
}