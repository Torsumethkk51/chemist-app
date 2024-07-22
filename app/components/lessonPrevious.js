import Link from "next/link";

export default function LessonPrevious(props) {
    const { latestScroll } = props

    return (
        <div>
            <Link className="text-[12px] bg-gray-900 rounded-md w-[100px] py-2 text-center absolute top-[70px] right-4" href="/pages/lessons">
                {"< "} เลือกบทเรียนอื่น
            </Link>

            <div className={latestScroll > 30 ? "text-[12px] bg-gray-900 rounded-md w-[100px] py-2 text-center fixed bottom-4 right-4 duration-300 z-[888]" : "hidden duration-300"} onClick={() => {window.scrollTo(0,0)}}>
                กลับขึ้นด้านบน
            </div>
        </div>
    )
}