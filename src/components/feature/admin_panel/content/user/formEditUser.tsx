import React, {SyntheticEvent, useState} from "react";
import {useRouter} from "next/navigation";
import {UserSchema} from "../../../../../../services/validation/schema/userSchema";
import toast from "react-hot-toast";
import axios from "axios";
import HashPassword from "../../../../../../services/functionality/passwordHandler";
import Button from "@/components/tokens/button";
import Modal from "@/components/components/modal";
import InputForm from "@/components/components/inputForm";
import LabelInput from "@/components/tokens/labelInput";

type Roles = {
    id:number,
    name:string,
    desc: string
}
type User = {
    id:number,
    name:string,
    email:string,
    password:string,
    address:string,
    phone:string,
    roleId: number,
    role:{
        id:number,
        name:string,
        desc:string,
    }
}

export default function FormEditUser(props:{
    roles:Roles[],
    user:User
}) {
    const [modalAdd, setAddModal] = useState(false)
    const [name, setName] = useState(props.user.name);
    const [email, setEmail] = useState(props.user.email);
    const [password, setPassword] = useState(props.user.password);
    const [address, setAddress] = useState(props.user.address);
    const [phone, setPhone] = useState(props.user.phone);
    const [roleId, setRoleId] = useState(props.user.roleId);
    const router = useRouter();

    // handler for submit using axios
    const handleSubmit =async (e:SyntheticEvent)=>{
        e.preventDefault();
        const data ={
            name : name,
            email : email,
            password: password,
            address : address,
            phone:phone,
            roleId:roleId,
        }
        const result = UserSchema.safeParse(data);
        if (!result.success){
            let errorMessage =""
            result.error.issues.forEach((issue:any)=>{
                errorMessage = errorMessage + issue.path[0]+ ": " +issue.message +";  ";
            })
            toast.error(errorMessage)
            return;
        }
        await axios.post(`/api/user/${props.user.id}`, {
            name: name,
            email: email,
            password: password,
            address: address,
            phone:phone,
            roleId: roleId,
        })
        router.refresh()
        setAddModal(false)
    }
    return(
        <>
            <Button typeName={"button"} className={"btn btn-warning w-16"} name={"Edit"}
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
                                    <InputForm
                                        labelName={"User Phone"}
                                        type={"text"}
                                        placeholder={"User Phone"}
                                        valueInput={address}
                                        onChange={(e) => setPhone(e.target.value)}
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
                                        name={"Update"}
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