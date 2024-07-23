'use client'
import AppHeader from "@/app/components/AppHeader";
import VideoBg from "@/app/components/VideoBg";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

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
            <AppHeader latestScroll={latestScroll} />
            <VideoBg bgUrl={"/bgVideos/aboutBg.mp4"} />
            <Content />
        </div>
    )
}