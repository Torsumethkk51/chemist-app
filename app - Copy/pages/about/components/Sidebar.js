import { Link } from "react-scroll";

export default function Sidebar() {
    return (
        <div className="w-[25%] h-[90%] flex flex-col justify-center items-center py-2 fixed top-[60px]">
            <div className="w-[90%] h-full bg-black/40 rounded-lg py-4">
                <div className="px-8">
                    <h1 className="text-3xl font-medium">รายการหัวข้อ</h1>
                </div>
                <div className="px-8">
                    <ol className="w-[90%] h-auto pt-8 space-y-8 text-xl flex flex-col items-start list-decimal">
                        <li><a href="#history">ความเป็นมา</a></li>
                        <li><a href="#purpose">จุดประสงค์</a></li>
                        <li><a href="#technology">เทคโนโลยีที่ใช้</a></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}