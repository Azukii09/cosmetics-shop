import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default function Select(props: {
    id: string;
    name: string | undefined;
    options: any;
}) {
    return (
        <select
            name={props.name}
            id={props.id}
            className={"py-2 px-4 rounded-2xl text-xs font-medium bg-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-200"}
        >
            {props.options.map(
                (option: {
                    key: Key | null | undefined;
                    value?: string | number | readonly string[] | undefined;
                    name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
                <option
                    key={option.key}
                    value={option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    )
}