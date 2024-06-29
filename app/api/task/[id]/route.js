import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const query = await prisma.Post.findUnique({
        where: {
            id: params.id
        }
    });
    return NextResponse.json(query);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const updatedquery = await prisma.Post.update({
        where: {
            id: params.id
        },
        data: data
    });
    return NextResponse.json(updatedquery);
}

export async function DELETE(request, { params }) {
    try {
        const deletedquery = await prisma.Post.delete({
            where: {
                id: params.id
            }
        })
        return NextResponse.json("Deleted: " + deletedquery.id);
    } catch (error) {
        return NextResponse.json(error.message)
    }
}