import Image from "next/image";

export default function Purpose() {
    return (
        <div className="w-[90%] h-[100%] bg-black/40 mb-5 rounded-lg space-y-8 px-8 py-8" id="purpose">
            <h1 className="text-[15px] tablet:text-[25px] laptop-l:text-[45px] font-medium pt-6">จุดประสงค์และจุดมุ่งหมาย</h1>
            <ol className="list-decimal text-start text-[10px] tablet:text-[13px] laptop-l:text-[20px] font-light space-y-2">
                <li>เพื่อพัฒนาเว็บไซต์เพื่อการศึกษาในรายวิชา เคมี เรื่อง อะตอมและธาตุ</li>
                <li>เพื่อเก็บและประเมินผลความพึงพอใจของผู้เข้าใช้งานเว็บไซต์</li>
                <li>เพื่อทำให้การศึกษาวิชาเคมีเป็นเรื่องที่ง่าย และสะดวก</li>
            </ol>
            <div className="space-y-8">
                <div className="space-y-0 font-light flex flex-col items-center ">
                    <Image src="/images/website.png" width={500} height={300} className="w-auto h-auto hover:scale-[1.1] duration-300 my-6" alt="ChemistxNext website"/>
                    <p className='text-center text-[7px] tablet:text-[12px] w-[120px] tablet:w-[200px] laptop-l:w-[300px] laptop-l:text-[18px]'>รูปภาพที่ 1.1 เพื่อพัฒนาเว็บไซต์เพื่อการศึกษาในรายวิชา เคมี เรื่อง อะตอมและธาตุ</p>
                </div>
                <div className="space-y-0 font-light flex flex-col items-center">
                    <Image src="/images/rating.png" width={500} height={300} className="w-auto h-auto hover:scale-[1.1] duration-300 my-6" alt="website rating" priority/>
                    <p className='text-center text-[7px] tablet:text-[12px] w-[120px] tablet:w-[200px] laptop-l:w-[300px] laptop-l:text-[18px]'>รูปภาพที่ 2.1 เพื่อเก็บและประเมินผลความพึงพอใจของผู้เข้าใช้งานเว็บไซต์</p>
                </div>
            </div>
        </div>
    )
}