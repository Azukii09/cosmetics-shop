import {PrismaClient, User} from "@prisma/client";
import {NextResponse} from "next/server";

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
    const body:User = await req.json();
    const role = await prisma.user.create({
        data:{
            name: body.name,
            email: body.email,
            password: body.password,
            address: body.address,
            roleId: Number(body.roleId),
        },
    });
    return NextResponse.json(role,{status:201})
}