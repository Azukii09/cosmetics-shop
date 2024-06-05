export default function LabelInput(props: {
    labelName: string | undefined; }) {
    return <span className="text-gray-700 ">{props.labelName}</span>
}