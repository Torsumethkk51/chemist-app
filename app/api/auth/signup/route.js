import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function GET() {
    const query = await prisma.Admin.findMany();
    return NextResponse.json(query);
}

export async function POST(request) {
    try {
        const { username, email, password } = await request.json()
        const hashedPassword = bcrypt.hashSync(password, 10)
        
        const newUser = await prisma.Admin.create({
            data : {
                username,
                email,
                password: hashedPassword,
            }
        })
        return Response.json({ message: 'User created', newUser })
        
    } catch (error) {
        return NextResponse.json( { error }, { status: 500 } )
    }
}