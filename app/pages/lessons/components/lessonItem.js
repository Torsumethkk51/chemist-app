'use client'
import Image from "next/image";
import Link from "next/link";
import LessonDetail from "./lessonDetail";

export default function LessonItem(props) {
    const { lesson, setLessonDetailElement } = props

    return (
        <div className="w-[300px] h-[100px] flex space-x-[10px] bg-black/50 p-1 rounded-lg">
            <Image src={lesson.thumbnailUrl} width={400} height={300} alt={lesson.title} priority className="rounded-lg w-auto h-auto" />
            <div className="space-y-[0.5px]">
                <span className="text-[8px]">หน่วยที่ {lesson.id}</span>
                <h1 className="text-[9px] font-medium">{lesson.title}</h1>
                <p className="text-[5px] mt-6 h-[18px]">{lesson.description}</p>
                <div className="mt-12 space-x-[4px]">
                    <Link className="bg-none border-2 border-white  px-[1px] py-[1px] text-[8px] hover:bg-white hover:text-gray-900 rounded-lg duration-300" href={lesson.href}>
                        เข้าสู่บทเรียน
                    </Link>
                    <button className="bg-none border-2 border-white px-[1px] py-[1px] text-[8px] hover:bg-white hover:text-gray-900 rounded-lg duration-300" onClick={() => {
                        setLessonDetailElement(<LessonDetail setLessonDetailElement={setLessonDetailElement} lessonIndex={lesson.id - 1} id={lesson.id} title={lesson.title} />)
                    }}>
                        รายละเอียด
                    </button>
                </div>
            </div>
        </div>
    )
}