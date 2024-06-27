import TableComponent from "@/components/components/tableComponent";

export default function UserMasterPage() {
    const title = [
        {
            id:1,
            name:"No"
        },
        {
            id:2,
            name:"Name"
        },
        {
            id:3,
            name:"Status"
        },
        {
            id:4,
            name:"Description"
        },
    ]
    const tableBody = [
        {
            id:1,
            name:"Owner",
            status:"active",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:2,
            name:"HR",
            status:"active",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:3,
            name:"Accounting",
            status:"active",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:4,
            name:"Admin",
            status:"active",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:5,
            name:"Item 5",
            status:"active",
            description:"Item 5"
        },
        {
            id:6,
            name:"Item 6",
            status:"active",
            description:"Item 6"
        },
        {
            id:7,
            name:"Item 7",
            status:"active",
            description:"Item 7"
        },
        {
            id:8,
            name:"Item 8",
            status:"active",
            description:"Item 8"
        },
        {
            id:9,
            name:"Item 9",
            status:"active",
            description:"Item 9"
        },
        {
            id:10,
            name:"Item 10",
            status:"active",
            description:"Item 10"
        },
        {
            id:11,
            name:"Item 11",
            status:"active",
            description:"Item 11"
        },
        {
            id:12,
            name:"Item 12",
            status:"active",
            description:"Item 12"
        },
        {
            id:13,
            name:"Item 13",
            status:"active",
            description:"Item 13"
        },
        {
            id:14,
            name:"Item 14",
            status:"active",
            description:"Item 14"
        },
        {
            id:15,
            name:"Item 15",
            status:"active",
            description:"Item 15"
        },
        {
            id:16,
            name:"Item 16",
            status:"active",
            description:"Item 16"
        },
        {
            id:17,
            name:"Item 17",
            status:"active",
            description:"Item 17"
        },
        {
            id:18,
            name:"Item 18",
            status:"active",
            description:"Item 18"
        },
        {
            id:19,
            name:"Item 19",
            status:"active",
            description:"Item 19"
        },
        {
            id:20,
            name:"Item 20",
            status:"active",
            description:"Item 20"
        },
        {
            id:21,
            name:"Item 21",
            status:"active",
            description:"Item 21"
        },
    ]
    return (
        <div className="container p-8">
            <div className={"bg-white p-6 rounded-md"}>
                {/*Title*/}
                <h4
                    className="mb-4 text-lg font-semibold text-secondary"
                >
                    User Master
                </h4>
                {/*Content Table*/}
                <TableComponent title={title} body={tableBody} />
            </div>
        </div>
    );
}
