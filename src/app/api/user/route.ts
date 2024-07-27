import {NextResponse} from "next/server";
import {PrismaClient, User} from "@prisma/client";

const prisma = new PrismaClient();
export const POST = async (req: Request) => {
    const body:User = await req.json();
    const user = await prisma.user.create({
        data:{
            name: body.name,
            email: body.email,
            password: body.password,
            address: body.address,
            phone: body.phone,
            roleId: Number(body.roleId),
        },
    });
    return NextResponse.json(user,{status:201})
}