import InputForm from "@/components/components/inputForm";
import Button from "@/components/tokens/button";
import React, {SyntheticEvent, useState} from "react";
import Modal from "@/components/components/modal";
import {useRouter} from "next/navigation";
import axios from "axios";
import {RoleSchema} from "../../../../../../services/validation/schema/role/roleSchema";
import toast from "react-hot-toast";

type Roles = {
    id:number,
    name:string,
    desc:string,
}

export default function FormEditRole(props: {
    roles: Roles,
}) {
    const [modalEdit, setEditModal] = useState(false)
    const [name, setRoleName] = useState(props.roles.name);
    const [desc, setDesc] = useState(props.roles.desc);

    const router = useRouter();

    // handler for submit using axios
    const handleUpdate =async (event:SyntheticEvent)=>{
        event.preventDefault();
        const dataUpdate ={
            name : name,
            desc : desc,
        }
        const result = RoleSchema.safeParse(dataUpdate);
        if (!result.success){
            let errorMessage =""
            result.error.issues.forEach((issue:any)=>{
                errorMessage = errorMessage + issue.path[0]+ ": " +issue.message +";  ";
            })
            toast.error(errorMessage)
            return;
        }
        await axios.patch(`/api/role/${props.roles.id}`, dataUpdate)
        router.refresh()
        setEditModal(false)
    }
    return (
        <>
            <Button typeName={"button"} className={"btn-sm btn-warning"} name={"edit"} handler={()=>setEditModal(true)}/>
            {/*this is for add data modal*/}
            {modalEdit && (
                <Modal
                    title={`Edit data ${name}`}
                    handler={()=>setEditModal(false)}
                    content={
                        <div className={""}>
                            <form onSubmit={handleUpdate}>
                                <div className="mt-2 pl-4">
                                    <InputForm
                                        labelName={"Role Name"}
                                        type={"text"}
                                        placeholder={"role name"}
                                        valueInput={name}
                                        onChange={(e)=>setRoleName(e.target.value)}
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
                                    <Button typeName={"submit"} className={"btn btn-primary"} name={"Update"}/>
                                    <Button typeName={"button"} className={"btn btn-line "} name={"Cancel"}
                                            handler={()=>setEditModal(false)}/>
                                </div>
                            </form>
                        </div>
                    }/>
            )}
        </>
    )
}