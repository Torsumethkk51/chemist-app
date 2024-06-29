import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const query = await prisma.Post.findMany();
    return NextResponse.json(query);
}

export async function POST(request) {
    const { firstname, lastname, grade, room, rating, comments } = await request.json();
    const newquery = await prisma.Post.create({
        data : {
            firstname,
            lastname,
            grade,
            room,
            rating,
            comments
        }
    })
    return NextResponse.json(newquery);
}