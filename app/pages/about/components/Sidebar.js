import { Link } from "react-scroll";

export default function Sidebar() {
    return (
        <div className="w-[70px] mobile-m:w-[80px] mobile-l:w-[90px] tablet:w-[160px] laptop:w-[210px] laptop-l:w-[300px] h-[90%] flex flex-col justify-center items-center py-2 fixed top-[60px]">
            <div className="w-[90%] h-full bg-black/40 rounded-lg py-4">
                <div className="px-4">
                    <h1 className="text-[5.5px] mobile-m:text-[7px] mobile-l:text-[9px] tablet:text-[20px] laptop-l:text-[35px] font-medium">รายการหัวข้อ</h1>
                </div>
                <div className="px-4">
                    <ol className="w-[90%] text-[5px] mobile-m:text-[6px] mobile-l:text-[8px] tablet:text-[16px] laptop-l:text-[24px] h-auto space-y-[-10px] tablet:space-y-2 pt-3 text-xl flex flex-col items-start list-decimal">
                        <li><a href="#history">ความเป็นมา</a></li>
                        <li><a href="#purpose">จุดประสงค์</a></li>
                        <li><a href="#technology">เทคโนโลยีที่ใช้</a></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}