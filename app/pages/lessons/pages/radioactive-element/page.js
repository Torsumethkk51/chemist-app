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
            <div className="bg-[url('/bgImage/lessonBg.png')] bg-cover bg-center w-[100vw] h-[100vh] fixed z-[-999]"></div>
            <AppHeader latestScroll={latestScroll} />
            <div className="pt-[60px]">

                <LessonPrevious latestScroll={latestScroll} />

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">6.ธาตุกัมมันตรังสี</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/uranium.jpg" alt="uranium" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ธาตุกัมมันตรังสี ยูเรเนียม (U)</p>
                        <Link href="https://alchetron.com/Uranium" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br /> https://alchetron.com/Uranium</Link>
                    </div>
                    <p className="w-[200px] text-[8px] text-center laptop-l:text-[14px] laptop-l:w-[750px]">ธาตุในตาราง จะกลุ่มของธาตุที่สามารถแผ่รังสี แล้วกลายเป็นธาตุใหม่ได้ โดยเรียกธาตุกลุ่มนี้ว่า "ธาตุกัมมันตรังสี"</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] text-center w-[250px] laptop-l:w-[400px] laptop-l:text-[36px]">6.1 การเกิดกัมมันตภาพรังสี</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/nuclear.jpg" alt="nuclear" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">การเกิดกัมมันตภาพรังสี</p>
                    </div>
                    <p className="w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">กัมมันตภาพรังสีเป็นปรากฎการณ์ ที่ธาตุกัมมันตรังสีเกิดการแผ่รังสีออกมาตลอดเวลา เนื่องจากในนิวเคลียสของธาตุกัมมันตรังสีมีพลังงานสูงมาก และไม่เสถียร จึงต้องปลดปล่อยพลังงานส่วนเกินออกมาในรูปของอนุภาคหรือรังสีบางชนิด เพื่อทำให้ธาตุกัมมันตรังสีอยู่ในสภาพที่เสถียร</p>
                    <p className="font-medium text-[15px] ml-[-2rem] w-[200px] laptop-l:text-xl laptop-l:w-[800px] text-center">อนุภาคหรือรังสีที่แผ่หรือสลายตัวออกมาจากธาตุกัมมันตรังสี แบ่งออกเป็น 3 ประเภท ได้แก่</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={500} height={0} src="/lessonImages/radioactive-table.png" alt="radioactive table" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">อนุภาคหรือรังสีที่แผ่หรือสลายตัวออกมาจากธาตุกัมมันตรังสี</p>
                    </div>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">6.2 การสลายตัวของธาตุกัมมันตรังสี</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/radioactive-decay.jpg" alt="radioactive decay" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">การสลายตัวของธาตุกัมมันตรังสี</p>
                        <Link href="https://www.scienceabc.com/pure-sciences/why-are-certain-elements-radioactive-causes-examples.html" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[250px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://www.scienceabc.com/pure-sciences/why-are-certain-elements-radioactive-causes-examples.html<br/>และ<br/></Link>
                    </div>
                    <ul className="text-start w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md laptop-l:text-[14px] laptop-l:w-[750px]">
                        <li>6.2.1 การแผ่รังสีแอลฟา : นิวเคลียสใหม่ที่เกิดขึ้น จะมีเลขอะตอมลดลง 2 นห่วย และเลขมวลลดลง 4 หน่วย</li>
                        <li>6.2.2 การแผ่รังสีบีตา : นิวเคลียสของธาตุใหม่ จะมีเลขมวลคงที่ แต่มีเลขอะตอมเพิ่มขึ้น 1 หน่วย</li>
                        <li>6.2.3 การแผ่รังสีแกมมา : ไม่ทำให้เลขมวลและเลขอะตอมของธาตุเปลี่ยนแปลงไป</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">6.3 ครึ่งชีวิตของธาตุกัมมันตรังสี</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/halflife1.jpg" alt="radioactive decay" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ครึ่งชีวิตของธาตุกัมมันตรังสี</p>
                        <Link href="https://emmausyr11nuclearphysics.weebly.com/radioactive-decay.html" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[450px] w-[250px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://emmausyr11nuclearphysics.weebly.com/radioactive-decay.html</Link>
                    </div>
                    <p className="text-center text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px]">ระยะเวลาที่สารกัมมันตรังสีสลายตัวจนเหลือเพียงครึ่งหนึ่งของปริมาณเดิม</p>
                    <p className="text-center text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px]">หาได้จากความสัมพันธ์ดังนี้</p>
                    <Image width={300} height={0} src="/lessonImages/halflife1.png" alt="radioactive decay" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                    <Image width={300} height={0} src="/lessonImages/halflife2.png" alt="radioactive decay" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                    <p className="font-medium text-[15px] ml-[-2rem] w-[200px] laptop-l:text-[20px] laptop-l:w-[300px] text-center laptop-l:ml-[-35rem]">โดยตัวแปรมีดังนี้</p>
                    <ol className="text-start list-disc w-[200px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md laptop-l:text-[14px] laptop-l:w-[750px]">
                        <li>N<sub>เหลือ</sub> = ปริมาณของกัมมันตรังสีที่เหลือ</li>
                        <li>N<sub>เริ่มต้น</sub> = ปริมาณของกัมมันตรังสีเริ่มต้น</li>
                        <li>n = จำนวครั้งในการสลายตัว</li>
                        <li>T = เวลาที่ใช้ในการสลายตัว</li>
                        <li>t<sub>1/2</sub> = ครึ่งชีวิต</li>
                    </ol>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">6.4 ปฎิกริยานิวเคลียร์</p>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex space-x-2">
                            <Image width={200} height={0} src="/lessonImages/fission.jpg" alt="fission" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                            <Image width={200} height={0} src="/lessonImages/fusion.jpg" alt="fusion" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        </div>
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ปฎิกริยาฟิชชัน และฟิวชัน</p>
                        <Link href="https://www.thoughtco.com/nuclear-fission-definition-and-examples-4065372" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[250px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://www.thoughtco.com/nuclear-fission-definition-and-examples-4065372<br/>และ<br/></Link>
                        <Link href="https://www.bbc.com/news/science-environment-63957085" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">https://www.bbc.com/news/science-environment-63957085</Link>
                    </div>
                    <p className="text-center text-[8px] w-[200px]"></p>
                </div>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">6.4.1 ปฎิกริยาฟิชชัน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/fission.jpg" alt="fission nuclear" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ปฎิกริยาฟิชชัน</p>
                        <Link href="https://www.thoughtco.com/nuclear-fission-definition-and-examples-4065372" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.thoughtco.com/nuclear-fission-definition-and-examples-4065372</Link>
                    </div>
                    <p className="w-[200px] text-[8px] text-center laptop-l:text-[14px] laptop-l:w-[800px]">ปฎิกริยาฟิชชัน คือ กระบวนการที่นิวเคลียสของธาตุหนักบางชนิด ถูกยิงด้วยนิวตรอน แล้วเกิดการแตกตัวออกเป็นไอโซโทปของธาตุที่เบากว่า</p>
                </div>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">6.4.2 ปฎิกริยาฟิชชัน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/fusion.jpg" alt="fusion nuclear" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ปฎิกริยาฟิวชัน</p>
                        <Link href="https://www.bbc.com/news/science-environment-63957085" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.bbc.com/news/science-environment-63957085</Link>
                    </div>
                    <p className="w-[200px] text-[8px] text-center laptop-l:text-[14px] laptop-l:w-[750px]">ปฎิกริยาฟิวชัน คือ ปฎิกริยาที่เกิดการรวมตัวของไอโซโทปที่มีมวลอะตอมต่ำ ทำให้เกิดไอโซโทปใหม่ที่มีมวลมากขึ้นกว่าเดิม</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] w-[250px] laptop-l:w-[700px] text-center laptop-l:text-[36px]">6.5 การตรวจสอบสารกัมมันตรังสี และเทคโนโลยีที่เกี่ยวข้องกับการใช้สารกัมมันตรังสี</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={200} height={0} src="/lessonImages/geiger.jpg" alt="geiger counter" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">เครื่องไกเกอร์-มูลเลอร์ เคาน์เตอร์</p>
                        <Link href="https://instrukart.com/imagesco-gca-07-series-geiger-muller-counter/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://instrukart.com/imagesco-gca-07-series-geiger-muller-counter/</Link>
                    </div>
                    <p className="font-medium text-[15px] ml-[-2rem] w-[200px] laptop-l:w-[350px] laptop-l:text-[25px] laptop-l:ml-[-25rem]">การตรวจสอบสารกัมมันตรังสี</p>
                    <ul className="text-start w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md laptop-l:text-[14px] laptop-l:w-[750px]">
                        <li>6.5.1 ใช้ฟิล์มหุ้มสารที่สงสัยว่าเป็นสารกัมมันตรังสี แล้วนำไปไว้ในที่มืด จากนั้นนำฟิล์มมาล้าง ถ้าฟิล์มปรากฎสีดำ แสดงว่าสารนั้นคือสารกัมมันตรังสี</li>
                        <li>6.5.2 นำสารที่สงสัยว่าจะมีกัมมันตรังสีไปไว้ใกล้กับสารเรืองแสง ถ้าเกิดการเรื่องแสงขึ้นแสดงว่าสารนั้นเป็นสารกัมมันตรังสี</li>
                        <li>6.5.3 ใช้เครื่อง ไกเกอร์-มูลเลอร์ เคาน์เตอร์ ในการตรวจหา แหล่งและวัดปริมาณของรังสี ซึ่งเครื่องมือนี้เป็นเครื่องมือสัดรังสี ที่ได้รับความนิยมและใช้กันมากที่สุด</li>
                    </ul>
                    <p className="font-medium text-[15px] ml-[-2rem] w-[200px] laptop-l:w-[350px] laptop-l:text-[25px] laptop-l:ml-[-25rem]">ธาตุกัมมันตรังสีสามารถนำมาใช้ประโยชน์ในชีวิตประจำวันได้หลายด้าน เช่น</p>
                    <ul className="text-start w-[250px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md laptop-l:text-[14px] laptop-l:w-[750px]">
                        <li>6.5.1 ด้านธรณีวิทยา</li>
                        <li>6.5.2 ด้านการแทพย์</li>
                        <li>6.5.3 ด้านอุตสาหกรรม</li>
                        <li>6.5.4 ด้านเกษตรกรรม</li>
                        <li>6.5.5 ด้านการถนอมอาหาร</li>
                        <li>6.5.6 ด้านพลังงาน</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">6.6 อันตรายจากธาตุกัมมันตรังสี</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/radioactive-worker.jpg" alt="radioactive protect suit" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">การใส่ชุดป้องกันกัมมันตรังสี</p>
                        <Link href="https://ymi.today/2016/08/odj-laying-down-your-life/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br /> https://ymi.today/2016/08/odj-laying-down-your-life/</Link>
                    </div>
                    <p className="w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">อันตรายจากธาตุกัมมันตรังสีเกิดขึ้นได้ หากร่างกายของสิ่งมีชีวิตได้รับกัมมันตรังสีในปริมาณที่มากเกินไป ซึ่งทำให้สิ่งมีชีวิตเกิดความเจ็บป่วย หรือ หากได้รับในปริมาณมากก็อาจทำให้เสียชีวิตได้</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/dangerous-of-radioactive.jpg" alt="dangerous of radioactive" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">อันตรายจากธาตุกัมมันตรังสี</p>
                        <Link href="https://web.facebook.com/zeoil/posts/1659938270888082/?locale=es_LA&_rdc=1&_rdr" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br /> https://web.facebook.com/zeoil/posts<br/>/1659938270888082/?locale=es_LA&_rdc=1&_rdr</Link>
                    </div>
                </div>

                <div className="mt-24" />

            </div>
        </div>
    )
}