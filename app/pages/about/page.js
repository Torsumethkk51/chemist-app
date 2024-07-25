'use client'
import AppHeader from "@/app/components/AppHeader";
import { useEffect, useState } from "react";
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
            <div className="bg-[url('/bgImage/aboutBg.png')] bg-cover bg-center w-[100vw] h-[100vh] fixed z-[-999]"></div>
            <Content />
        </div>
    )
}