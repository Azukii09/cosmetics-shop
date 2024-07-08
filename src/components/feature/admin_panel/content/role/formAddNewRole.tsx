"use client"
import InputForm from "@/components/components/inputForm";
import Button from "@/components/tokens/button";
import React, {SyntheticEvent, useState} from "react";
import Modal from "@/components/components/modal";
import axios from "axios";
import {useRouter} from "next/navigation";

export default function FormAddNewRole() {
    const [modalAdd, setAddModal] = useState(false)
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const router = useRouter();

    // handler for submit using axios
    const handleSubmit =async (e:SyntheticEvent)=>{
        e.preventDefault();
        await axios.post("/api/role", {
            name: name,
            desc: desc,
        })
        setName("")
        setDesc("")
        router.refresh()
        setAddModal(false)
    }
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
                            <form onSubmit={handleSubmit}>
                                <div className="mt-2 pl-4">
                                    <InputForm
                                        labelName={"Role Name"}
                                        type={"text"}
                                        placeholder={"role name"}
                                        valueInput={name}
                                        onChange={(e)=>setName(e.target.value)}
                                    />
                                    <InputForm
                                        labelName={"Description"}
                                        type={"text"}
                                        placeholder={"Description"}
                                        valueInput={desc}
                                        onChange={(e)=>setDesc(e.target.value)}
                                    />
                                </div>
                                <div className="py-3 flex gap-4 flex-row-reverse">
                                    <Button
                                        typeName={"submit"}
                                        className={"btn btn-primary"}
                                        name={"Create"}
                                    />
                                    <Button
                                        typeName={"button"}
                                        className={"btn btn-line "}
                                        name={"Cancel"}
                                        handler={()=>setAddModal(false)}
                                    />
                                </div>
                            </form>
                        </div>
                    }/>
            )}
        </>

    )
}