import InputForm from "@/components/components/inputForm";
import Button from "@/components/tokens/button";
import React, {useState} from "react";
import Modal from "@/components/components/modal";

type Roles = {
    id:number,
    name:string,
    desc:string,
}

export default function FormEditRole(props: {
    roles: Roles,
}) {
    const [modalEdit, setEditModal] = useState(false)
    const [roleName, setRoleName] = useState(props.roles.name);
    const [desc, setDesc] = useState(props.roles.desc);
    return (
        <>
            <Button typeName={"button"} className={"btn-sm btn-warning"} name={"edit"} handler={()=>setEditModal(true)}/>
            {/*this is for add data modal*/}
            {modalEdit && (
                <Modal
                    title={"Edit New Role"}
                    handler={()=>setEditModal(false)}
                    content={
                        <div className={""}>
                            <form>
                                <div className="mt-2 pl-4">
                                    <InputForm
                                        labelName={"Role Name"}
                                        type={"text"}
                                        placeholder={"role name"}
                                        valueInput={roleName}
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
                                    <Button typeName={"button"} className={"btn btn-primary"} name={"Create"}
                                            handler={()=>setEditModal(false)}/>
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