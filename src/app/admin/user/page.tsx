"use client"
import TableComponent from "@/components/components/tableComponent";
import {useState} from "react";
import Button from "@/components/tokens/button";

export default function UserMasterPage() {
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
            name:"Status"
        },
        {
            id:4,
            name:"Description"
        },
    ]
    const tableBody = [
        {
            id:1,
            name:"Owner",
            status:"active",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:2,
            name:"HR",
            status:"active",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:3,
            name:"Accounting",
            status:"active",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:4,
            name:"Admin",
            status:"active",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:5,
            name:"Item 5",
            status:"active",
            description:"Item 5"
        },
        {
            id:6,
            name:"Item 6",
            status:"active",
            description:"Item 6"
        },
        {
            id:7,
            name:"Item 7",
            status:"active",
            description:"Item 7"
        },
        {
            id:8,
            name:"Item 8",
            status:"active",
            description:"Item 8"
        },
        {
            id:9,
            name:"Item 9",
            status:"active",
            description:"Item 9"
        },
        {
            id:10,
            name:"Item 10",
            status:"active",
            description:"Item 10"
        },
        {
            id:11,
            name:"Item 11",
            status:"active",
            description:"Item 11"
        },
        {
            id:12,
            name:"Item 12",
            status:"active",
            description:"Item 12"
        },
        {
            id:13,
            name:"Item 13",
            status:"active",
            description:"Item 13"
        },
        {
            id:14,
            name:"Item 14",
            status:"active",
            description:"Item 14"
        },
        {
            id:15,
            name:"Item 15",
            status:"active",
            description:"Item 15"
        },
        {
            id:16,
            name:"Item 16",
            status:"active",
            description:"Item 16"
        },
        {
            id:17,
            name:"Item 17",
            status:"active",
            description:"Item 17"
        },
        {
            id:18,
            name:"Item 18",
            status:"active",
            description:"Item 18"
        },
        {
            id:19,
            name:"Item 19",
            status:"active",
            description:"Item 19"
        },
        {
            id:20,
            name:"Item 20",
            status:"active",
            description:"Item 20"
        },
        {
            id:21,
            name:"Item 21",
            status:"active",
            description:"Item 21"
        },
        {
            id:22,
            name:"Item 22",
            status:"active",
            description:"Item 22"
        },
    ]
    const [modal,setModal] = useState(false)
    const [value, setValue] = useState(5);
    return (
        <>
            {modal && (
                <div className="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    {/*Background backdrop, show/hide based on modal state.*/}

                    {/*Entering: "ease-out duration-300"*/}
                    {/*  From: "opacity-0"*/}
                    {/*  To: "opacity-100"*/}
                    {/*Leaving: "ease-in duration-200"*/}
                    {/*  From: "opacity-100"*/}
                    {/*  To: "opacity-0"*/}

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                         aria-hidden="true"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            {/*Modal panel, show/hide based on modal state.*/}

                            {/*Entering: "ease-out duration-300"*/}
                            {/*  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
                            {/*  To: "opacity-100 translate-y-0 sm:scale-100"*/}
                            {/*Leaving: "ease-in duration-200"*/}
                            {/*  From: "opacity-100 translate-y-0 sm:scale-100"*/}
                            {/*  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}

                            <div
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div
                                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <h3 className="text-base font-semibold leading-6 text-gray-900"
                                                id="modal-title">Deactivate account</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">Are you sure you want to
                                                    deactivate
                                                    your account? All of your data will be permanently removed. This
                                                    action cannot be undone.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setModal(!modal)}
                                    >Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container p-8">
                <div className={"bg-white p-6 rounded-md"}>
                    {/*Title*/}
                    <h4
                        className="mb-4 text-lg font-semibold text-secondary"
                    >
                        User Master
                    </h4>
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
                        <Button typeName={"button"} className={"btn btn-primary w-16"} name={"Add"}
                                handler={() => setModal(!modal)}/>
                    </div>
                    {/*Content Table*/}
                    <TableComponent title={title} body={tableBody} pageSize={value}/>
                </div>
            </div>
        </>

    );
}
