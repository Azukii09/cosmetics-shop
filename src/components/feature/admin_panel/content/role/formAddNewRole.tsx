"use client"
import InputForm from "@/components/components/inputForm";
import Button from "@/components/tokens/button";
import React, {useState} from "react";
import Modal from "@/components/components/modal";

export default function FormAddNewRole() {
    const [modalAdd, setAddModal] = useState(false)
    return(
        <>
            <Button typeName={"button"} className={"btn btn-primary w-16"} name={"Add"}
                    handler={()=>setAddModal(true)}/>
            {/*this is for add data modal*/}
            {modalAdd && (
                <Modal
                    title={"Create New Role"}
                    handler={()=>setAddModal(false)}
                    content={
                        <div className={""}>
                            <form>
                                <div className="mt-2 pl-4">
                                    <InputForm labelName={"Role Name"} type={"text"} placeholder={"role name"}/>
                                    <InputForm labelName={"Description"} type={"text"} placeholder={"Description"}/>
                                </div>
                                <div className="py-3 flex gap-4 flex-row-reverse">
                                    <Button typeName={"button"} className={"btn btn-primary"} name={"Create"}
                                            handler={()=>setAddModal(false)}/>
                                    <Button typeName={"button"} className={"btn btn-line "} name={"Cancel"}
                                            handler={()=>setAddModal(false)}/>
                                </div>
                            </form>
                        </div>
                    }/>
            )}
        </>

    )
}