import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import type {Role} from "@prisma/client";

const prisma = new PrismaClient();

export const PATCH = async (req:Request,{params}:{params:{id:string}}) => {
    const body:Role = await req.json();
    const role = await prisma.role.update({
        data:{
            name: body.name,
            desc: body.desc,
        },
        where:{
            id:Number(params.id),
        }
    });
    return NextResponse.json(role, {status: 200});
}
export const DELETE = async (req:Request,{params}:{params:{id:string}}) => {
    const role = await prisma.role.delete({
        where:{
            id:Number(params.id),
        }
    });
    return NextResponse.json(role, {status: 200});
}