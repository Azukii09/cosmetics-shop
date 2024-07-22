"use client"
import InputForm from "@/components/components/inputForm";
import Button from "@/components/tokens/button";
import React, {SyntheticEvent, useState} from "react";
import Modal from "@/components/components/modal";
import axios from "axios";
import {useRouter} from "next/navigation";
import LabelInput from "@/components/tokens/labelInput";
import HashPassword from "../../../../../../services/functionality/passwordHandler";

type Roles = {
    id:number,
    name:string,
    desc: string
}

export default function FormAddNewUsers(props:{
    roles:Roles[],
}) {
    const [modalAdd, setAddModal] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [roleId, setRoleId] = useState(0);
    const router = useRouter();

    // handler for submit using axios
    const handleSubmit =async (e:SyntheticEvent)=>{
        e.preventDefault();
        await axios.post("/api/user", {
            name: name,
            email: email,
            password: HashPassword(password),
            address: address,
            roleId: roleId,
        })
        setName("")
        setEmail("")
        setPassword("")
        setAddress("")
        setRoleId(0)
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
                    title={"Create New User"}
                    handler={()=>setAddModal(false)}
                    content={
                        <div className={""}>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-2 pl-4">
                                    <InputForm
                                        labelName={"User Name"}
                                        type={"text"}
                                        placeholder={"User Name"}
                                        valueInput={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <InputForm
                                        labelName={"User Email"}
                                        type={"email"}
                                        placeholder={"User Email"}
                                        valueInput={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputForm
                                        labelName={"Password"}
                                        type={"password"}
                                        placeholder={"Password"}
                                        valueInput={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputForm
                                        labelName={"User Address"}
                                        type={"text"}
                                        placeholder={"User Address"}
                                        valueInput={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <label className="block text-sm mb-4">
                                        <LabelInput labelName={"Role Name"}/>
                                        <select
                                            value={roleId}
                                            onChange={(e) => {
                                                setRoleId(Number(e.target.value));
                                            }}
                                            className={roleId === 0?"block w-full mt-1 font-medium text-contras py-2 px-4 focus:outline-none focus:ring focus:ring-primary border-[1px] border-secondary rounded":"block w-full mt-1 font-medium text-secondary py-2 px-4 focus:outline-none focus:ring focus:ring-primary border-[1px] border-secondary rounded"}
                                        >
                                            <option value={0}>Choose Role</option>
                                            {props.roles.map((role: Roles) =>
                                                <option value={role.id} key={role.id}>{role.name}</option>
                                            )}
                                        </select>
                                    </label>

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