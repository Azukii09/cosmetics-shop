import React, {useState} from "react";
import Button from "@/components/tokens/button";
import Modal from "@/components/components/modal";

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

export default function FormDetailUser(props: {
    users: Users,
}) {
    const [modalDetail, setDetailModal] = useState(false)

    return (
        <>
            <Button typeName={"button"} className={"btn-sm btn-primary"} name={"detail"} handler={()=>setDetailModal(true)}/>
            {/*this is for add data modal*/}
            {modalDetail && (
                <Modal
                    title={`Detail data ${props.users.name}`}
                    handler={()=>setDetailModal(false)}
                    content={
                        <div className={""}>
                            <div className="mt-2 pl-4">
                                <table className={"w-full border border-gray-300"}>
                                    <tbody>
                                    <tr>
                                        <td className={"w-1/3 py-3 px-2 text-xs font-semibold tracking-wide text-left text-info uppercase border-b bg-gray-50"}>User Name</td>
                                        <td className={"divide-y px-2 border-b"}>: {props.users.name}</td>
                                    </tr>
                                    <tr>
                                        <td className={"w-1/3 py-3 px-2 text-xs font-semibold tracking-wide text-left text-info uppercase border-b bg-gray-50"}>User Email</td>
                                        <td className={"divide-y px-2 border-b"}>: {props.users.email}</td>
                                    </tr>
                                    <tr>
                                        <td className={"w-1/3 py-3 px-2 text-xs font-semibold tracking-wide text-left text-info uppercase border-b bg-gray-50"}>User Address</td>
                                        <td className={"divide-y px-2 border-b"}>: {props.users.address}</td>
                                    </tr>
                                    <tr>
                                        <td className={"w-1/3 py-3 px-2 text-xs font-semibold tracking-wide text-left text-info uppercase border-b bg-gray-50"}>User Role</td>
                                        <td className={"divide-y px-2 border-b"}>: {props.users.role.name}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-3 flex gap-4 flex-row-reverse">
                                <Button typeName={"button"} className={"btn btn-line "} name={"Close"}
                                        handler={()=>setDetailModal(false)}/>
                            </div>
                        </div>
                    }/>
            )}
        </>
    )
}