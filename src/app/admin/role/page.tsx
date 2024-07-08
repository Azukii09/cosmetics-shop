import {PrismaClient} from "@prisma/client";
import PaginationFilter from "@/components/feature/admin_panel/content/role/paginationFilter";

const prisma = new PrismaClient();

// get all data from api using prisma orm findMany function
const getRoles =async() =>{
    return prisma.role.findMany({
        select: {
            id: true,
            name: true,
            desc: true,
        }
    });
}


export default async function RoleMasterPage() {
    // parsing data to roles variable
    let roles = await getRoles();

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
                    <PaginationFilter roles={roles}/>
                </div>
            </div>
        </>

    );
}
