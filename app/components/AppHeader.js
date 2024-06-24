import Link from "next/link"
import { usePathname } from "next/navigation"
import { links } from "../data/app-link"
import clsx from "clsx"

export default function AppHeader(props) {
    const { latestScroll } = props
    const pathName = usePathname()

    const linkElement = links.map((link, index) => {
        return (
            <Link key={index} href={link.linkUrl} className={clsx(
                "flex justfy-center items-center h-[60px] px-8 rounded-bl-md rounded-br-md hover:bg-black/40",
                {
                    "bg-gray-500/50 hover:bg-gray-500/50": pathName === link.linkUrl
                }
            )}>
                <p className="text-xl">{link.linkName}</p>
            </Link>
        )
    })

    const navbarStyle = latestScroll > 0 ? "flex justify-between items-center mx-28 h-[60px] fixed top-[-65px] left-0 right-0 z-50" : "flex justify-between items-center mx-28 h-[60px] fixed top-0 left-0 right-0 z-50"

    return (
        <div>
            <div className={navbarStyle} data-aos="fade-down" id="navbar">
                <div>
                    <h1 className="text-4xl font-medium">ChemistryDocs</h1>
                </div>
                <div className="flex items-center">
                    {linkElement}
                </div>
            </div>
        </div>
    )
}