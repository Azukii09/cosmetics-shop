import {PrismaClient} from "@prisma/client";
import PaginationFilterUser from "@/components/feature/admin_panel/content/user/paginationFilterUser";

const prisma = new PrismaClient();

// get all data from api using prisma orm findMany function
const getUsers =async() =>{
    return prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            address: true,
            roleId: true,
            role: {
                select:{
                    id: true,
                    name: true,
                    desc: true,
                }
            },
        }
    });
}

const getRoles = async() =>{
    return prisma.role.findMany({
        select:{
            id: true,
            name: true,
            desc: true,
        }
    })
}


export default async function UsersMasterPage() {
    // parsing data to roles variable
    let [users, roles] = await Promise.all([getUsers(),getRoles()])
    return (
        <>
            <div className="container p-8">
                <div className={"bg-white p-6 rounded-md"}>
                    {/*Title*/}
                    <h4
                        className="mb-4 text-lg font-semibold text-secondary"
                    >
                        User Master
                    </h4>
                    {/*parsing data that fetched into pagination filter component*/}
                    <PaginationFilterUser users={users} roles={roles}/>
                </div>
            </div>
        </>

    );
}
