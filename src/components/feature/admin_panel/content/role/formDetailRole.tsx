import React, {useState} from "react";
import Button from "@/components/tokens/button";
import Modal from "@/components/components/modal";

type Roles = {
    id:number,
    name:string,
    desc:string,
}

export default function FormDetailRole(props: {
    roles: Roles,
}) {
    const [modalDetail, setDetailModal] = useState(false)

    return (
        <>
            <Button typeName={"button"} className={"btn-sm btn-primary"} name={"detail"} handler={()=>setDetailModal(true)}/>
            {/*this is for add data modal*/}
            {modalDetail && (
                <Modal
                    title={`Detail data ${props.roles.name}`}
                    handler={()=>setDetailModal(false)}
                    content={
                        <div className={""}>
                            <div className="mt-2 pl-4">
                                <table className={"w-full border border-gray-300"}>
                                    <tbody>
                                        <tr>
                                            <td className={"w-1/3 py-3 px-2 text-xs font-semibold tracking-wide text-left text-info uppercase border-b bg-gray-50"}>Role Name</td>
                                            <td className={"divide-y px-2 border-b"}>: {props.roles.name}</td>
                                        </tr>
                                        <tr>
                                            <td className={"w-1/3 py-3 px-2 text-xs font-semibold tracking-wide text-left text-info uppercase border-b bg-gray-50"}>Role Description</td>
                                            <td className={"divide-y px-2 border-b"}>: {props.roles.desc}</td>
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