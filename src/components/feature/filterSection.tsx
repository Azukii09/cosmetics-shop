import Select from "@/components/tokens/select";

export default function FilterSection() {
    const dataColor = [
        {
            key:1,
            name:"Color",
        },
        {
            key:2,
            value:"red",
            name:"Red",
        },
        {
            key:3,
            value:"blue",
            name:"Blue",
        },
    ]

    const dataFilter = [
        {
            key:1,
            name:"All Filters",
        }
    ]

    const dataSort = [
        {
            key:1,
            name:"Sort",
        },
        {
            key:2,
            value:"low-to-high",
            name:"Price (low to high)",
        },
        {
            key:3,
            value:"high-to-low",
            name:"Price (high to low)",
        },

        {
            key:4,
            value:"newest",
            name:"Newest",
        },
        {
            key:5,
            value:"oldest",
            name:"Oldest",
        },
    ]
    return(
        <div className={"flex flex-wrap justify-between mt-12 gap-8"}>
            <div className={"flex gap-6"}>
                <select name="type" id="" className={"py-2 px-4 rounded-2xl text-xs font-medium bg-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-200"}>
                    <option>Type</option>
                    <option value="">Foundation</option>
                    <option value="">Eyes</option>
                </select>
                <Select id={""} name={"color"} options={dataColor}/>
            </div>
            <div className={"flex gap-6"}>
                <Select id={""} name={"all-filter"} options={dataFilter}/>
                <Select id={""} name={"sort"} options={dataSort}/>
            </div>
        </div>
    )
}