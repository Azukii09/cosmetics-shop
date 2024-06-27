"use client"
import Button from "@/components/tokens/button";
import PaginationComponent from "@/components/components/paginationsComponent";
import {useState} from "react";

export default function TableComponent(props: {
    title: any[];
    body: any[];
}) {
    // for set current page state
    const [currentPage, setCurrentPage] = useState(1);
    // for set how many row for listed data
    const pageSize = 5;

    // actions for change page states
    const onPageChange = (page:number) => {
        setCurrentPage(page);
    };

    // for show data that listed
    const paginate = (items:any[], pageNumber:number, pageSize:number) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return items.slice(startIndex, startIndex + pageSize);
    };
    const data = paginate(props.body,currentPage,pageSize)
    return (
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            className="text-xs font-semibold tracking-wide text-left text-info uppercase border-b bg-gray-50 "
                        >
                            {props.title.map((item:{id:number, name:string}) => (
                                <th className="px-4 py-3" key={item.id}>{item.name}</th>
                            ))}
                            <th className="px-4 py-3">
                                <span className={"flex justify-center"}>Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        className="bg-white divide-y"
                    >
                    {data.map((item:any,index) => (
                        <tr className="text-gray-700" key={item.id}>
                            <td className="px-4 py-3">
                                {index+1+((currentPage-1)*pageSize)}
                            </td>
                            <td className="px-4 py-3 text-sm">
                                {item.name}
                            </td>
                            <td className="px-4 py-3 text-xs">
                                <span
                                    className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                                >
                                  {item.status}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-xs">
                                <div>{item.description}
                                </div>
                            </td>
                            <td className="px-4 py-3 text-sm flex gap-2 justify-center">
                                <Button typeName={"button"} className={"btn-sm btn-primary"} name={"detail"}/>
                                <Button typeName={"button"} className={"btn-sm btn-warning"} name={"edit"}/>
                                <Button typeName={"button"} className={"btn-sm btn-danger"} name={"delete"}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div
                className="grid px-4 py-3 text-xs font-semibold tracking-wide text-info uppercase border-t bg-gray-50 sm:grid-cols-9"
            >
                <span className="flex items-center col-span-3">
                  Showing 21-30 of 100
                </span>
                <span className="col-span-2"></span>
                {/*Pagination*/}
                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                  <PaginationComponent
                      item={props.body.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={onPageChange}
                  />
                </span>
            </div>
        </div>
    )
}