import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export const DELETE = async (req:Request,{params}:{params:{id:string}}) => {
    const role = await prisma.role.delete({
        where:{
            id:Number(params.id),
        }
    });
    return NextResponse.json(role, {status: 200});
}