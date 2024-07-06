'use client'
import AppHeader from "@/app/components/AppHeader";
import VideoBg from "@/app/components/VideoBg";
import { members } from "@/app/data/member-data";
import ContactItem from "./components/contactItem";
import RateForm from "./components/rateForm";
import { useEffect, useState } from "react";

export default function Page() {
    const contactElements = members.map((member) => {
        return <ContactItem key={member.id} member={member} />
    })

    const [latestScroll, setLatestScroll] = useState(0)

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

    return (
        <div>
            <AppHeader latestScroll={latestScroll}/>
            <VideoBg bgUrl={"/bgVideos/contactBg.mp4"} />
            <div className="flex justify-center items-center space-x-8 w-full h-[100vh]">
                {contactElements}s
            </div>
            <div className="h-[100vh] pt-12 flex justify-center items-center" id="website rating">
                <RateForm />
            </div>
            {latestScroll > 200 ? <p onClick={() => {window.scrollTo(0, 0)}} className="fixed bottom-4 right-4 bg-gray-900 px-4 py-3 rounded-lg">กลับสู่ด้านบน</p> : <a href="#website rating" className="fixed bottom-4 right-4 bg-gray-900 px-4 py-3 rounded-lg">ให้คะแนนเว็บไซต์</a>}
        </div>
    )
}