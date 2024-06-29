import Button from "@/components/tokens/button";
import React, {ReactNode} from "react";

export default function ModalTest(props: {
    title: string;
    handler:any;
    content:ReactNode;
}){
    return (
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
                            <div className="flex sm:items-start justify-between">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                                        {props.title}
                                    </h3>
                                    <div className="mt-2">
                                        {props.content}
                                    </div>
                                </div>
                                <button onClick={props.handler}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="w-6 h-6 text-gray-700 hover:text-gray-900" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <Button typeName={"button"} className={"btn btn-success mx-2"} name={"Submit"}
                                    handler={props.handler}/>
                            <Button typeName={"button"} className={"btn btn-line mx-2"} name={"Cancel"}
                                    handler={props.handler}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}