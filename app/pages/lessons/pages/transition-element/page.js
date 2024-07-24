'use client'
import AppHeader from "@/app/components/AppHeader";
import LessonPrevious from "@/app/components/lessonPrevious";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        <div >
            <AppHeader latestScroll={latestScroll} />
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-[100vw] h-[100vh] fixed z-[-999]"></div>
            <div className="pt-[60px]">
                <LessonPrevious latestScroll={latestScroll} />

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">5.ธาตุทรานซิชั่น</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/gold.jpg" alt="gold" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ธาตุทรานซิชั่น ทองคำ (Ag)</p>
                        <Link href="https://wonderfulengineering.com/40-hd-gold-wallpaper-backgrounds-for-free-desktop-download/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> wonderfulengineering.com</Link>
                    </div>
                    <p className="w-[200px] text-[8px] text-center">ธาตุที่ถูกจัดไว้ในกลุ่มของธาตุที่เป็นโลหะ แต่จะมีสมบัติที่แตกต่างจากโลหะหมู่ IA กับ IIA ดังนั้น ธาตุทรานซิชั่นจึงถูกจัดไว้คนละกลุ่มกับโลหะหมู่ IA และ IIA</p>
                </div>

                
                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] text-center w-[250px] laptop-l:w-[500px] laptop-l:text-[36px]">5.1 สมบัติของธาตุแทรนซิชันที่<br/>แตกต่างจากโลหะหมู่ IA และ IIA
                    </p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/transition-color.jpg" alt="transition color" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">สมบัติของธาตุทรานซิชั่น เช่น มีสี</p>
                        <Link href="https://getrevising.co.uk/revision-cards/transition_metals_colours_substitution_and" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://getrevising.co.uk/revision-cards/transition_metals_colours_substitution_and</Link>
                    </div>
                    <p className="font-medium text-[15px] ml-[-2rem] w-[200px] laptop-l:w-[400px] laptop-l:text-[25px] laptop-l:ml-[-16rem]">สมบัติของธาตุแทรนซิชันที่แตกต่างจากโลหะหมู่ IA และ IIA</p>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>5.1.1 มีเวเลนซ์อิเล็กตรอน เท่ากับ 2 (ยกเว้น Cr และ Cu มีเวเลนซ์อิเล็กตรอนเท่ากับ 1)</li>
                        <li>5.1.2 มีขนาดอะตอมใกล้เคียงกัน</li>
                        <li>5.1.3 มีจุดเดือดจุดหลอมเหลว และความหนาแน่นสูงกว่าโลหะหมู่ IA และ IIA มาก</li>
                        <li>5.1.4 มีค่าพลังงานไอออไนเซชันในลำดับที่ 1 และ มีค่าอิเล็กโทรเนกาติวิตีต่ำ แต่สูงกว่าโลหะหมู่ IA และ IIA</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] text-center w-[250px] laptop-l:w-[350px] laptop-l:text-[36px]">5.2 สารประกอบของธาตุแทรนซิชัน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/transition-compounds.jpg" alt="transition compounds" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ตัวอย่างสารประกอบทรานซิชั่น</p>
                        <Link href="http://www.sputtering-targets.net/blog/how-was-chromium-discovered-metal-history/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> http://www.sputtering-targets.net/blog/how-was-chromium-discovered-metal-history/</Link>
                    </div>
                    <p className="font-medium text-[15px] ml-[-2rem] w-[200px] laptop-l:w-[450px] laptop-l:text-[25px] laptop-l:ml-[-16rem]">สารประกอบของธาตุแทรนซิชัน</p>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>5.2.1 สีของสารประกอบและไอออนของธาตุทรานซิชั่นขึ้นอยู่กับปัจจัยหลายอย่างเช่น 
                            <ol className="list-disc ml-6 mt-2 space-y-2">
                                <li>ชนิดของธาตุทรานซิชั่น</li>
                                <li>เลขออกซิเดชัน</li>
                                <li>ชนิดและจำนวนของสารที่เข้าสร้างพันธะกับธาตุทรานซิชั่น</li>
                            </ol>
                        </li>
                        <li>5.2.2 ธาตุทรานซิชั่น มีสีได้เนื่องจากอิเล็กตรอนในระดับ <br/>d-orbital มีความสามารถในการดูดกลืนแสงที่ตามองเห็น และแสงที่ไม่ถูกดูดกลืนนั้นจะปรากฎเป็นสีของสารประกอบหรือสีของไอออนแต่ละชนิด</li>
                    </ul>
                    <p className="font-medium text-[15px] ml-[-2rem] w-[200px] laptop-l:w-[450px] laptop-l:text-[25px] laptop-l:ml-[-16rem]">สารประกอบเชิงซ้อนของ<br/>ธาตุแทรนซิชัน</p>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>5.2.1 ไอออนเชิงซ้อนจะประกอบด้วยอะตอมหรือไอออนของโลหะทรานซิชั่นอยู่ตรงกลาง โดยมีกลุ่มไอออนหรือโมเลกุลอื่น(ลิแกนต์) ล้อมรอบด้วยพันธะ โคออร์ดิเนตโคเวเลนต์ ซึ่งไอออนเชิงซ้อนสามารถเกิดได้ทั้งไอออนบวกและไอออนลบ</li>
                        <li>5.2.2 สารประกอบเชิงซ้อน เป็นสารประกอบของโลหะทรานซิชั้นที่มีไอออนเชิงซ้อนมาเป็นองค์ประกอบ ซึ่งอาจเป็นไอออนบวหรือไอออนลบก็ได้</li>
                    </ul>
                </div>

                <div className="mt-24" />

            </div>
        </div>
    )
}