'use client'
import Link from "next/link"
import { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css"

export default function Button(props) {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    const { buttonText, buttonUrl, aos } = props

    return (
        <div data-aos={aos}>
            <Link href={buttonUrl} className="bg-violet-600 backdrop-blur-[15px] p-3 text-white font-medium cursor-pointer rounded-lg">
                {buttonText}
            </Link>
        </div>
    )
}