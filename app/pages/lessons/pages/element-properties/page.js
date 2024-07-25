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
        <div>
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-[100vw] h-[100vh] fixed z-[-999]"></div>
            <AppHeader latestScroll={latestScroll} />
            <div className="pt-[60px]">

                <LessonPrevious latestScroll={latestScroll} />

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">4.สมบัติของธาตุตามหมู่และคาบ</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/periodic-table.png" alt="dalton" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">สมบัติของธาตุตามหมู่และคาบ</p>
                        <Link href="https://th.wikipedia.org/wiki/%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://th.wikipedia.org/wiki/%E0%B<br/>8%95%E0%B8%B2%E0%B8%A3%E0%B<br/>8%B2%E0%B8%87%E0%B8%98%E0%<br/>B8%B2%E0%B8%95%E0%B8%B8</Link>
                    </div>
                    <p className="w-[200px] text-[8px] text-center">ธาตุพรีเซนเททีฟ มีสมบัติคล้ายคลึงกันตามหมู่และคาบเช่น ขนาดอะตอม รัศมีไอออน พลังงานไอออไนเซชัน อิเล็กโทรเนกาติวิตี สัมพรรคภาพอิเล็กตรอน</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="dalton-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">4.1 ขนาดอะตอม</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/atom-size.jpg" alt="atom size" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ขนาดอะตอมตามหมู่และคาบ</p>
                        <Link href="https://pantip.com/topic/37096188" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://pantip.com/topic/37096188</Link>
                    </div>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>4.1.1 ในหมู่เดียวกัน อะตอมจะมีขนาดใหญ่ขึ้น เมื่อมีเลขอะตอมเพิ่มขึ้น</li>
                        <li>4.1.2 ในคาบเดียวกัน อะตอมจะมีขนาดเล็กลง เมื่อมีเลขอะตอมเพิ่มขึ้น</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="dalton-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">4.2 รัศมีไอออน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/ion-radius.jpg" alt="ion radius" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">รัศมีไอออนตามหมู่และคาบ</p>
                        <Link href="https://www.slideshare.net/slideshow/chemographics-periodic-232287427/232287427" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.slideshare.net/slideshow/chemogra<br/>phics-periodic-232287427/232287427</Link>
                    </div>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>4.2.1 ในหมู่เดียวกัน จะมีขนาดเพิ่มขึ้น เมื่อมีเลขอะตอมเพิ่มขึ้น</li>
                        <li>4.2.2 ไอออนบวกจะมีขนาดเล็กกว่าไอออนลบ เมื่อมีการจัดเรียงอิเล็กตรอนในจำนวนที่เท่ากัน</li>
                        <li>4.2.3 ไอออนบวกที่มีประจุมากจะมีขนาดเล็กกว่าไอออนที่มีประจุน้อย</li>
                        <li>4.2.4 ไอออนลบที่มีประจุมากจะมีขนาดใหญ่กว่าไอออนลบที่มีประจุน้อย</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="dalton-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">4.3 พลังงานไอออไนเซชัน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/ionization.png" alt="ionization" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">พลังงานไอออไนเซชันตามหมู่และคาบ</p>
                        <Link href="https://www.pinterest.fr/pin/721701909018464416/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.pinterest.fr/pin/721701909018464416/</Link>
                    </div>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>4.3.1 เป็นพลังงานที่น้อยที่สุดที่ใช้ในการดึงอิเล็กตรอนให้หลุดออกจากอะตอมในสภาวะแก๊ส</li>
                        <li>4.3.2 ตามคาบ จะมีค่ามากขึ้น เมื่อเลขอะตอมเพิ่มขึ้น</li>
                        <li>4.3.3 ตามหมู่ จะมีค่าลดลง เมื่อเลขอะตอมเพิ่มขึ้น</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="dalton-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">4.4 อิเล็กโทรเนกาติวิตี</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/electronegavity.jpg" alt="electronegavity" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">พลังงานไอออไนเซชันตามหมู่และคาบ</p>
                        <Link href="https://socratic.org/questions/what-trend-in-electronegativity-do-you-see-as-you-go-across-a-period-row-on-the-" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://socratic.org/questions/what-trend-in-electronegativity-do-you-see-as-you-go-across-a-period-row-on-the-</Link>
                    </div>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>4.4.1 เป็นค่าความสามารถของอะตอมในการดึงดูดอิเล็กตรอนเพื่อให้เกิดเป็นสารประกอบ</li>
                        <li>4.4.2 ตามคาบ จะมีค่ามากขึ้น เมื่อเลขอะตอมเพิ่มขึ้น</li>
                        <li>4.4.3 ตามหมู่ จะมีค่าลดลง เมื่อมีเลขอะตอมเพิ่มขึ้น</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="dalton-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">4.5 สัมพรรคภาพอิเล็กตรอน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/electron-affinity.jpg" alt="electron affinity" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">สัมพรรคภาพอิเล็กตรอนตามหมู่และคาบ</p>
                        <Link href="https://www.chemistrylearner.com/the-periodic-table/electron-affinity" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.chemistrylearner.com/the-periodic-table/electron-affinity</Link>
                    </div>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>4.5.1 เป็นพลังงานที่อะตอมในสถานะแก๊สคายออกมาเมื่อได้รับอิเล็กตรอน</li>
                        <li>4.5.2 ตามคาบ จะมีเพิ่มขึ้น (ค่าเป็นลบมากขึ้น) เมื่อเลขอะตอมเพิ่มขึ้น</li>
                        <li>4.5.3 ตามหมู่ จะมีลดลง เมื่อเลขอะตอมเพิ่มขึ้น</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="dalton-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">4.6 จุดเดือดจุดหลอมเหลว</p>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex space-x-4">
                            <Image width={350} height={0} src="/lessonImages/boiling.jpg" alt="boiling" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                            <Image width={350} height={0} src="/lessonImages/melting.jpg" alt="melting" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        </div>
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">จุดเดือดจุดหลอมเหลว</p>
                        <Link href="https://www.researchgate.net/figure/The-atmopshere-maintains-a-constant-surface-temperature-under-increasing-radiative-heat_fig2_268425434" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.researchgate.net/figure/The-atmopshere-maintains-a-constant-surface-temperature-under-increasing-radiative-heat_fig2_268425434 <br/>และ<br/></Link>
                        <Link href="https://www.pbs.org/wgbh/nova/article/melting-to-keep-cool/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">https://www.pbs.org/wgbh/nova/article/melting-to-keep-cool/</Link>
                    </div>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>4.6.1 ตามคาบ หมู่ 1A-4A จะมีจุดเดือดจุดหลอมเหลวสูงขึ้น ตามลำดับ ส่วนหมู่ 5A-8A จะมีจุดเดือดจุดหลอมเหลวลงลง ตามลำดับ</li>
                        <li>4.6.2 ตามหมู่ 1A-3A ส่วนใหญ่จุดเดือดจุมหลอมเหลว จะมีค่าลดลง หมู่ 4A จุดเดือดจุดหลอมเหลว มีแนวโน้มไม่ชัดเจน</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="dalton-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">4.7 เลขออกซิเดชัน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/oxidation-table.jpg" alt="oxidataion number" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">จุดเดือดจุดหลอมเหลว</p>
                        <Link href="https://slideplayer.com/slide/10193973/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://slideplayer.com/slide/10193973/</Link>
                    </div>
                    <ul className="text-start laptop-l:text-[14px] laptop-l:w-[750px] w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>4.7.1 เป็นเลขเพื่อแสดงถึงค่าประจุไฟฟ้าของอะตอมของธาตุในโมเลกุลของสารประกอบหรือไอออนของสาร</li>
                    </ul>
                </div>

                <div className="mt-24" />

            </div>
        </div>
    )
}