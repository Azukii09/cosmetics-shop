import React from "react";

export default function InputItem(props: {
    valueInput?: string | number | undefined;
    type: string | undefined;
    placeholder: string | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return(
        <>
            <input
                type={props.type}
                className="font-mono block w-full mt-1 text-sm text-primary h-7 p-4 rounded focus:outline-none focus:ring focus:ring-primary border-[1px] border-secondary"
                placeholder={props.placeholder}
                value={props.valueInput}
                onChange={props.onChange}
            />

        </>
    )
}