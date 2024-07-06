'use client'
import AppHeader from "@/app/components/AppHeader";
import VideoBg from "@/app/components/VideoBg";
import { lessons } from "@/app/data/lessons-data";
import { useEffect, useState } from "react";
import LessonItem from "./components/lessonItem";
import LessonDetail from "./components/lessonDetail";

export default function Page() {
    const [latestScroll, setLatestScroll] = useState(0)
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

    const openDetail = () => {
        setLessonDetailElement(<LessonDetail setLessonDetailElement={setLessonDetailElement}/>)
    }

    const lessonElements = lessons.map((lesson) => {
        return <LessonItem key={lesson.id} lesson={lesson} openDetail={openDetail}/>
    })

    return (
        <div className="pb-12">
            <AppHeader latestScroll={latestScroll}/>
            <VideoBg bgUrl={"/bgVideos/lessonsBg.mp4"} />
            <div className="flex flex-col items-center pt-16">
                <h1 className="text-5xl font-medium">รายการเนื้อหา</h1>
                <input type="text" placeholder="ป้อนคำเพื่อค้นหา" className="w-[400px] px-4 py-2 mt-4 text-xl bg-gray-800 border-white rounded-lg"/>
                <div className="space-y-8 mt-20">
                    {lessonElements}
                </div>
            </div>
            {lessonDetailElement}
        </div>
    )
}