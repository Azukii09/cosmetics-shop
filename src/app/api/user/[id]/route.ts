import {PrismaClient, User} from "@prisma/client";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export const PATCH = async (req:Request,{params}:{params:{id:string}}) => {
    const body:User = await req.json();
    const user = await prisma.user.update({
        data:{
            name: body.name,
            email: body.email,
            password: body.password,
            address: body.address,
            phone: body.phone,
            roleId: Number(body.roleId),
        },
        where:{
            id:Number(params.id),
        }
    });
    return NextResponse.json(user, {status: 200});
}

export const DELETE = async (req:Request,{params}:{params:{id:string}}) => {
    const user = await prisma.user.delete({
        where:{
            id:Number(params.id),
        }
    });
    return NextResponse.json(user, {status: 200});
}