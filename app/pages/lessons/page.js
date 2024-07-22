'use client'
import AppHeader from "@/app/components/AppHeader";
import { lessons } from "@/app/data/lessons-data";
import { useEffect, useState } from "react";
import LessonItem from "./components/lessonItem";

export default function Page() {
    const [latestScroll, setLatestScroll] = useState(0)
    const [userSearch, setUserSearch] = useState("")
    const [lessonDetailElement, setLessonDetailElement] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setLatestScroll(scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const filteredLessons = lessons.filter((lesson) => {
        return lesson.title.includes(userSearch)
    })

    const lessonElements = filteredLessons.map((lesson) => {
        return <LessonItem key={lesson.id} lesson={lesson} setLessonDetailElement={setLessonDetailElement}/>
    })

    const notFoundElement = (
        <div className="w-[300px] h-[500px] bg-black/60 rounded-md flex justify-center items-center">
            <p className="text-[12px]">ขออภัยไม่พบเนื้อหาที่ท่านต้องการ</p>
        </div>
    )

    return (
        <div>
            <div className="pb-12 flex flex-col items-center">
            <div className="bg-[url('/bgImage/lessonBg.png')] bg-cover bg-center w-[100vw] h-[100vh] fixed z-[-999]"></div>
            <AppHeader latestScroll={latestScroll}/>
            <div className="flex flex-col items-center pt-16">
                <h1 className="text-[20px] laptop-l:text-[35px] font-medium">รายการเนื้อหา</h1>
                <input 
                    type="text" 
                    placeholder="ป้อนคำเพื่อค้นหา" 
                    className="w-[250px] laptop-l:w-[600px] px-4 laptop-l:px-[20px] py-[5px] laptop-l:py-[12px] mt-4 text-[12px] laptop-l:text-[18px] bg-gray-800 border-white rounded-lg"
                    value={userSearch}
                    onChange={(event) => {setUserSearch(event.target.value)}}
                />
                <div className="space-y-8 mt-[20px] laptop-l:mt-[45px] w-full">
                    {filteredLessons.length === 0 ? notFoundElement : lessonElements}
                </div>
            </div>
            {lessonDetailElement}
        </div>
        </div>
    )
}