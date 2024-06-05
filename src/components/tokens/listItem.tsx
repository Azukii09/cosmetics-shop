import Link from "next/link";

export default function ListItem(props: {
    linkTo?: string|undefined;
    itemClass?: string | undefined;
    key?: number;
    itemName: string | number | bigint | boolean | null | undefined; }){
    return(
        <li className={props.itemClass}>
            <Link href={props.linkTo === undefined ? "#":props.linkTo}>{props.itemName}</Link>
        </li>
    )
}