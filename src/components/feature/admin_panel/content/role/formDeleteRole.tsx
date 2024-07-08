import React, { useState} from "react";
import Button from "@/components/tokens/button";
import Modal from "@/components/components/modal";
import axios from "axios";
import {useRouter} from "next/navigation";

type Roles = {
    id:number,
    name:string,
    desc:string,
}
export default function FormDeleteRole(props: {
    roles: Roles,
}) {
    const router = useRouter();
    const [modalDelete, setDeleteModal] = useState(false)
    const handleDelete =async (roleId:number)=>{
        await axios.delete(`/api/role/${roleId}`);
        router.refresh()
        setDeleteModal(false)
    }
    return (
        <>
            <Button typeName={"button"} className={"btn-sm btn-danger"} name={"delete"} handler={()=>setDeleteModal(true)}/>
            {/*this is for add data modal*/}
            {modalDelete && (
                <Modal
                    title={"Delete Role"}
                    handler={()=>setDeleteModal(false)}
                    content={
                        <div className={""}>
                            <div className="mt-2 pl-4">
                                <h3 className={"font-semibold text-xl"}>Are you sure to <span className={"uppercase font-bold text-danger"}>delete</span> {props.roles.name}</h3>
                            </div>
                            <div className="py-3 flex gap-4 flex-row-reverse">
                                <Button typeName={"button"} className={"btn btn-danger"} name={"Delete"}
                                        handler={()=>handleDelete(props.roles.id)}/>
                                <Button typeName={"button"} className={"btn btn-line "} name={"Cancel"}
                                        handler={()=>setDeleteModal(false)}/>
                            </div>
                        </div>
                    }/>
            )}
        </>
    )
}