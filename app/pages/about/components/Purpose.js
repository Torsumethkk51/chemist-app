import Image from "next/image";

export default function Purpose() {
    return (
        <div className="w-[90%] h-[100%] bg-black/40 mb-5 rounded-lg space-y-8 px-8 py-8" id="purpose">
            <h1 className="text-3xl font-medium pt-6">จุดประสงค์และจุดมุ่งหมาย</h1>
            <ol className="list-decimal text-[18px] font-light space-y-2 px-6 ">
                <li>เพื่อพัฒนาเว็บไซต์เพื่อการศึกษาในรายวิชา เคมี เรื่อง อะตอมและธาตุ</li>
                <li>เพื่อเก็บและประเมินผลความพึงพอใจของผู้เข้าใช้งานเว็บไซต์</li>
                <li>เพื่อทำให้การศึกษาวิชาเคมีเป็นเรื่องที่ง่าย และสะดวก</li>
            </ol>
            <div className="space-y-16">
                <div className="space-y-8 font-light flex flex-col items-center ">
                    <Image src="/images/website.png" width={700} height={500} className="w-auto h-auto hover:scale-[1.1] duration-300 my-6" alt="ChemistxNext website"/>
                    <p>รูปภาพที่ 1.1 เพื่อพัฒนาเว็บไซต์เพื่อการศึกษาในรายวิชา เคมี เรื่อง อะตอมและธาตุ</p>
                </div>
                <div className="space-y-8 font-light flex flex-col items-center">
                    <Image src="/images/rating.png" width={700} height={500} className="w-auto h-auto hover:scale-[1.1] duration-300 my-6" alt="website rating" priority/>
                    <p>รูปภาพที่ 2.1 เพื่อเก็บและประเมินผลความพึงพอใจของผู้เข้าใช้งานเว็บไซต์</p>
                </div>
            </div>
        </div>
    )
}