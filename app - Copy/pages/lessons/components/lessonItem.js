'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LessonItem(props) {
    const { lesson, openDetail } = props

    return (
        <div className="w-[1000px] flex space-x-8 bg-black/50 p-4 rounded-lg">
            <Image src={lesson.thumbnailUrl} width={350} height={150} alt={lesson.title} priority className="rounded-lg w-auto h-auto" />
            <div>
                <span>หน่วยที่ {lesson.id}</span>
                <h1 className="text-3xl font-medium">{lesson.title}</h1>
                <p className="mt-6">{lesson.description}</p>
                <div className="mt-12 space-x-2">
                    <Link className="bg-none border-2 border-white px-3 py-2 hover:bg-white hover:text-gray-900 rounded-lg duration-300" href={lesson.href}>
                        เข้าสู่บทเรียน
                    </Link>
                    <button className="bg-none border-2 border-white px-3 py-2 hover:bg-white hover:text-gray-900 rounded-lg duration-300" onClick={openDetail}>
                        รายการเนื้อหา
                    </button>
                </div>
            </div>
        </div>
    )
}