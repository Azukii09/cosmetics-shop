import LabelInput from "@/components/tokens/labelInput";
import InputItem from "@/components/tokens/inputItem";

export default function InputForm(props: {
    labelName: string | undefined;
    valueInput?: string | number | undefined;
    type: string | undefined;
    placeholder: string | undefined;
    onChange: (value: any) => void;
}){
    return(
        <>
            <label className="block text-sm mb-4">
                <LabelInput labelName={props.labelName}/>
                <InputItem
                    type={props.type}
                    placeholder={props.placeholder}
                    valueInput={props.valueInput}
                    onChange={props.onChange}
                />
            </label>
        </>
    )
}