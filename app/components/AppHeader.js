'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { links } from "../data/app-link"
import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

export default function AppHeader(props) {
    const { latestScroll } = props
    const pathName = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const linkElement = links.map((link, index) => {
        return (
            <Link key={index} href={link.linkUrl} className={clsx(
                "flex justfy-center items-center h-[60px] mx-12 tablet:px-4 mr-0 tablet:mr-[-2rem] rounded-bl-md rounded-br-md hover:bg-black/40",
                {
                    "bg-gray-500/50 hover:bg-gray-500/50": pathName === link.linkUrl
                }
            )}>
                <p className="text-xl text-center tablet:text-[13px] laptop:text-[17px] laptop-l:text-[20px]">{link.linkName}</p>
            </Link>
        )
    })

    const navbarStyle = latestScroll > 0 ? "flex justify-between items-center h-[60px] px-16 fixed top-0 left-0 right-0 z-[9999] bg-black duration-700" : "flex justify-between items-center px-16 h-[60px] fixed top-0 left-0 right-0 z-50 duration-700"

    const menu = links.map((link, index) => {
        return (
            <Link key={index} href={link.linkUrl} className="flex justfy-center items-center h-[60px] px-8 rounded-bl-md rounded-br-md ">
                <p className="text-[10px] mobile-m:text-[12px] mobile-l:text-[14px] laptop:text-[20px] laptop-l:text-[24px]">{link.linkName}</p>
            </Link> 
        )
    })

    return (
        <div className="w-full mobile-m:[200px]">
            <div className={navbarStyle} data-aos="fade-down" id="navbar">
                <div className="ml-[-2rem]">
                    <h1 className="text-[15px] mobile-m:text-[17px] mobile-l:text-[19px] tablet:text-[24px] laptop:text-[26px] laptop-l:text-[35px] font-medium">ChemistxNext</h1>
                </div>
                <div className="hidden md:flex items-center">
                    {linkElement}
                </div>
                <div className="block md:hidden mr-[-2rem]">
                    <div onClick={() => {setIsMenuOpen(!!isMenuOpen ? false : true)}}>
                        <Image src={isMenuOpen ? "/images/cross-sm.png" : "/images/menu-sm.png"} width={5} height={5} alt="menu" className="w-auto h-auto" />
                    </div>
                    <div className="absolute top-10 right-0 text-center">
                        {isMenuOpen ? <div className="space-y-[-40px] text-end bg-black/60">{menu}</div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}