import ListItem from "@/components/tokens/listItem";

export default function ListComponent(props: {
    itemClass?: string | undefined;
    ulClass?: string | undefined;
    list: any[]; }) {
       return(
        <>
            <ul className={props.ulClass}>
                {props.list.map(item => (
                    <ListItem
                        itemClass={props.itemClass}
                        key={item.id}
                        itemName={item.name}
                        linkTo={item.linkTo}
                    />
                ))}
            </ul>
        </>
    )
}