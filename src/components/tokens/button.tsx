export default function Button(props: {
    typeName: "submit" | "reset" | "button" | undefined;
    className: string | undefined;
    name?: string | undefined;
    handler?: any;
}){
    return (
            <button
                type={props.typeName}
                className={props.className}
                onClick={(props.handler)}
            >
                {props.name}
            </button>
    )
}