import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import type {Role} from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body:Role = await req.json();
    const role = await prisma.role.create({
        data:{
            name: body.name,
            desc: body.desc,
        },
    });
    return NextResponse.json(role,{status:201})
}