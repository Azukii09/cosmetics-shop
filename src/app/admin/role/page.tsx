"use client"
import TableComponent from "@/components/components/tableComponent";
import React, {useState} from "react";
import Button from "@/components/tokens/button";
import Modal from "@/components/components/modal";
import FormAddNewRole from "@/components/feature/admin_panel/content/role/formAddNewRole";

export default function RoleMasterPage() {
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
            name:"Description"
        },
    ]
    const tableBody = [
        {
            id:1,
            name:<span className={"w-36 flex"}>Role 1</span>,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:2,
            name:<span className={"w-36 flex"}>Role 2</span>,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:3,
            name:<span className={"w-36 flex"}>Role 3</span>,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:4,
            name:<span className={"w-36 flex"}>Role 4</span>,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:5,
            name:<span className={"w-36 flex"}>Role 5</span>,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:6,
            name:<span className={"w-36 flex"}>Role 6</span>,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:7,
            name:<span className={"w-36 flex"}>Role 7</span>,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:8,
            name:<span className={"w-36 flex"}>Role 8</span>,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id:9,
            name:<span className={"w-36 flex"}>Role 9</span>,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"
        },
        {
            id: 10,
            name: <span className={"w-36 flex"}>Role 10</span>,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas voluptatum!"

        },
    ]
    const [modalAdd, setAddModal] = useState(false)
    const [modalEdit, setEditModal] = useState(false)
    const [value, setValue] = useState(5);
    const button = [
        {
            id:1,
            component:<Button typeName={"button"} className={"btn-sm btn-primary"} name={"detail"} />,
        },
        {
            id:2,
            component:<Button typeName={"button"} className={"btn-sm btn-warning"} name={"edit"} handler={()=>setEditModal(true)}/>,
        },
        {
            id:3,
            component:<Button typeName={"button"} className={"btn-sm btn-danger"} name={"delete"}/>,
        },

    ]
    return (
        <>
            {/*this is for add data modal*/}
            {modalAdd && (
                <Modal
                    title={"Create New Role"}
                    handler={()=>setAddModal(!modalAdd)}
                    content={
                        <FormAddNewRole handleSubmit={() => setAddModal(false)}/>
                    }/>
            )}
            {/*this is for add data modal*/}
            {modalEdit && (
                <Modal
                    title={"Edit New Role"}
                    handler={()=>setEditModal(!modalEdit)}
                    content={
                        <FormAddNewRole handleSubmit={() => setEditModal(false)}/>
                    }/>
            )}

            <div className="container p-8">
                <div className={"bg-white p-6 rounded-md"}>
                    {/*Title*/}
                    <h4
                        className="mb-4 text-lg font-semibold text-secondary"
                    >
                        User Master
                    </h4>
                    <div className={"p-4 flex justify-between"}>
                        <select
                            value={value}
                            onChange={(e) => {
                                setValue(Number(e.target.value));
                            }}
                            className={"block w-20 shadow-sm shadow-info mt-1 font-semibold text-secondary form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple py-2 px-4 rounded-xl"}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                        <Button typeName={"button"} className={"btn btn-primary w-16"} name={"Add"}
                                handler={() => setAddModal(true)}/>
                    </div>
                    {/*Content Table*/}
                    <TableComponent
                        title={title}
                        body={tableBody}
                        pageSize={value}
                        action={true}
                        actionsButton={button}
                    />
                </div>
            </div>
        </>

    );
}
