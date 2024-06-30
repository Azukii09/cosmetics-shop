import InputForm from "@/components/components/inputForm";
import Button from "@/components/tokens/button";

export default function FormEditRole(props:{
    handleSubmit: Function,
}) {
    return (
        <div className={""}>
            <form>
                <div className="mt-2 pl-4">
                    <InputForm
                        labelName={"Role Name"}
                        type={"text"}
                        placeholder={"role name"}
                        valueInput={"tes"}
                    />
                    <InputForm
                        labelName={"Description"}
                        type={"text"}
                        placeholder={"Description"}
                        valueInput={"tes"}
                    />
                </div>
                <div className="py-3 flex gap-4 flex-row-reverse">
                    <Button typeName={"button"} className={"btn btn-primary"} name={"Create"}
                            handler={props.handleSubmit}/>
                    <Button typeName={"button"} className={"btn btn-line "} name={"Cancel"}
                            handler={props.handleSubmit}/>
                </div>
            </form>
        </div>
    )
}