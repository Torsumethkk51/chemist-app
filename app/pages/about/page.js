'use client'
import AppHeader from "@/app/components/AppHeader";
import VideoBg from "@/app/components/VideoBg";
import { useEffect, useState } from "react";
import History from "./components/History";
import Sidebar from "./components/Sidebar";
import Purpose from "./components/Purpose";
import Technology from "./components/Technology";

export default function Page() {
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
            <section>
                <AppHeader latestScroll={latestScroll} />
                <VideoBg bgUrl={"/bgVideos/aboutBg.mp4"} />
                <div className="w-[100%] h-[95%] flex relative top-[60px]">
                    <Sidebar />
                    <div className="w-[70%] absolute left-[30%]">
                        <History />
                        <Purpose />
                        <Technology />
                    </div>
                </div>
            </section>
        </div>
    )
}