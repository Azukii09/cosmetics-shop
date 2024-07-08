import {PrismaClient} from "@prisma/client";
import PaginationFilter from "@/components/feature/admin_panel/content/role/paginationFilter";

const prisma = new PrismaClient();

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
    const roles = await getRoles();
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
                    <PaginationFilter roles={roles}/>
                </div>
            </div>
        </>

    );
}
