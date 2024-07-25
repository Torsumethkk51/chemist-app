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

                <LessonPrevious latestScroll={latestScroll}/>

                <div className="h-auto flex flex-col items-center space-y-10 my-12 mt-24 laptop-l:mt-12">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">2. การจัดเรียงอิเล็กตรอนในอะตอม</p>
                    <div className="flex flex-col items-center space-y-4 laptop-l:w-[200px]">
                        <Image width={250} height={0} src='/lessonImages/atomic-config.jpg' alt='atomic-config' className="w-[100px] laptop-l:w-auto h-auto rounded-md " />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">การจัดเรียงอิเล็กตรอนในอะตอม</p>
                        <Link href="https://shedevrum.ai/en/post/cf1a5a8b547b11eeb932222e7fa838a6/?utm_referrer=https%3A%2F%2Flens.google.com%2F" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px]">ขอขอบคุณภาพจาก https://shedevrum.ai/en/post/cf1a5<br/>a8b547b11eeb932222e7fa838a6/?utm_referrer=https%3A%2F%2Flens.goo<br/>gle.com%2F</Link>
                    </div>
                    <p className='text-center text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px]'>The electron configuration of an element describes how electrons are distributed in its atomic orbitals. <br /> การกําหนดค่าอิเล็กตรอนของธาตุอธิบายว่าอิเล็กตรอนกระจายอยู่ในออร์บิทัลของอะตอมอย่างไร</p>
                    <p className="text-center text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px]">จากาารศึกษาเกี่ยวกับแบบจำลองอะตอมแบบต่างๆ ของนักวิทยาศาสตร์ทำให้ทราบว่า อิเล็กตรอนสามารถอยู่ในระดับชั้นพลังงานต่างๆกันได้ ซึ่งในแต่ละระดับพลังงานจะมีจำนวนอิเล็กตรอนสูงสุดดังนี้</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={500} height={0} src="/lessonImages/electron-config-element.png" alt="electron configuration" className="w-[100px] laptop-l:w-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[350px] text-center">การจัดเรียงอิเล็กตรอนของธาตุบางธาตุ</p>
                        <Link href="https://boonmawong.wordpress.com/%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AB%E0%B8%B2%E0%B8%9A%E0%B8%97%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%B4%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B8%95%E0%B8%A3%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1/" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px]">ขอขอบคุณภาพจาก https://shorturl.at/msoi2</Link>
                    </div>
                    <p className="w-[200px] text-[8px] text-center laptop-l:text-[14px] laptop-l:w-[750px]">จากาารศึกษามากมาย โบร์จึงเสนอแนวคิดว่า <br /> "จำนวนอิเล็กตรอนที่อยู่ในแต่ละระดับชั้นพลังงานได้มีค่า มากที่สุดเท่ากับ 2n<sup>2</sup>(เมื่อ n คือระดับชั้นพลังงาน) ดังนั้น"</p>
                    <ul className="text-center w-[250px] laptop-l:text-[14px] laptop-l:w-[750px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>ระดับพลังงาน n = 1 จำนวนอิเล็กตรอนที่บรรจุได้มากที่สุด คือ 2 อิเล็กตรอน</li>
                        <li>ระดับพลังงาน n = 2 จำนวนอิเล็กตรอนที่บรรจุได้มากที่สุด คือ 8 อิเล็กตรอน</li>
                        <li>ระดับพลังงาน n = 3 จำนวนอิเล็กตรอนที่บรรจุได้มากที่สุด คือ 18 อิเล็กตรอน</li>
                        <li>ระดับพลังงาน n = 4 จำนวนอิเล็กตรอนที่บรรจุได้มากที่สุด คือ 32 อิเล็กตรอน</li>
                    </ul>
                    <p className="w-[200px] text-[8px] text-center laptop-l:text-[14px] laptop-l:w-[750px]">จากความรู้เกี่ยวกับการเคลื่อนที่ของอิเล็กตรอน และกลศาสตร์ควอนตัม ทำให้สามารถอธิบายตำแหน่งของอิเล็กตรอนได้ว่า <br /> อิเล็กตรอนจะอยู่ในระดับชั้นพลังงานต่างๆ และในแต่ละชั้นจะมีชั้นหลังงานย่อยอีกด้วย ซึ่งกำหนดเป็น s p d และ f ตามลำดับ <br /> โดยตัวอย่างจำนวนระดับพลังงานย่อยที่เป็นไปได้ในแต่ละระดับชั้นพลังงานตั้งแต่ 1-4 เป็นดังนี้</p>
                    <ul className="text-center w-[200px] laptop-l:text-[14px] laptop-l:w-[750px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>ระดับพลังงาน 1 (n = 1) มี 1 ระดับพลังงานย่อย คือ s</li>
                        <li>ระดับพลังงาน 2 (n = 2) มี 2 ระดับพลังงานย่อย คือ s p</li>
                        <li>ระดับพลังงาน 3 (n = 3) มี 3 ระดับพลังงานย่อย คิอ s p d</li>
                        <li>ระดับพลังงาน 4 (n = 4) มี 4 ระดับพลังงานย่อย คือ s p d f</li>
                    </ul>
                    <p className="w-[200px] text-[8px] text-center laptop-l:text-[14px] laptop-l:w-[750px]">เนื่องจากอิเล็กตรอนมีการเคลื่อนที่อยู่ตลอดเวลา ในลักษณะ 3 มิติ การวัดความหนาแน่นของกลุ่มหมอกอิเล็กตรอนนั้นหาได้จาก บริเวณที่ <br /> อยู่ใกล้นิวเคลียสที่มีโอกาสพบ อิเล็กตรอนได้มากที่สุด และมีพลังงานเฉพาะค่าที่แตกต่างกันไป เรียกบริเวณนั้นว่าออร์บิทัล (orbitals) ออร์บิทัลแต่ละออณืบิทัลจะมีรูปแบบที่แตกต่างกัน โดยในแต่ละออร์บิทัลจะสามารถบรรจุได้ 2 อิเล็กตรอน และแต่ละระดับพลังงานย่อย จะมีจำนวนออร์บิทัลที่แตกต่างกัน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={500} height={0} src="/lessonImages/orbitals.png" alt="orbitals" className="w-[100px] laptop-l:w-auto h-auto rounded-md " />
                        <p className="text-[10px] w-[200px] text-center laptop-l:text-[20px] laptop-l:w-[300px]">จำนวนออร์บิทัลและอิเล็กตรอนที่สามารถบรรจุได้ในแต่ละชั้นระดับชั้นพลังงานย่อย</p>
                    </div>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-full flex flex-col items-center justify-center space-y-10 mt-12" id="pauli">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">2.1 หลักการกีดกันของเพาลี</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/pauli-principle.jpg" alt="pauli principle" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">การบรรจุอิเล็กตรอนลงออร์บิทัล ตามหลักการของเพาลี</p>
                        <Link href="https://spaceth.co/neutron-star-squeezability-contradiction/" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px] ">ขอขอบคุณภาพจาก https://spaceth.co/neutron-star-squeezability-contradiction/</Link>
                    </div>
                    <p className="text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">ในการบรรจุอิเล็กตรอนลงออร์บิทัล สามารถบรรจุได้ออร์บิทัลละ 2 อิเล็กตรอนเท่านั้น และมีอิเล็กตรอนต้องมีสมบัติที่ต่างกัน</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-full flex flex-col items-center justify-center space-y-10 mt-12" id="aufbau">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">2.2 หลักอาฟบาว</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={350} height={0} src="/lessonImages/aufbau-principle.jpg" alt="aufbau principle" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ลำดับการบรรจุอิเล็กตรอนลงในระดับพลังงานย่อย</p>
                        <Link href="https://www.tutoroot.com/blog/what-is-aufbau-principle-definition-diagram/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.tutoroot.com/blog/what-is-aufbau-principle-definition-diagram/</Link>
                    </div>
                    <p className="text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">การจัดเรียงอิเล็กตรอนลงในแต่ละออร์บิทัล จะต้องจัดเรียงลงในออร์บิทัลที่มีพลังงานต่ำสุดก่อน <br /> แล้วค่อยเรียงในออร์บิทัลถัดๆไปที่มีพลังงานสูงขึ้น</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-full flex flex-col items-center justify-center space-y-10 mt-12" id="hund">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">2.3 กฎของฮุนด์</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/hund-rule.jpg" alt="hund's rule" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">กฎของฮุนด์</p>
                        <Link href="https://www.chemistrylearner.com/hunds-rule.html#google_vignette" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px]">ขอขอบคุณภาพจาก https://www.chemistrylearner.com/hunds-rule.html#google_vignette</Link>
                    </div>
                    <p className="text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">การบรรจุอิเล็กตรอนลงในออร์บิทัลที่มีระดับพลังงานเท่ากัน <br /> จะต้องบรรจุอิเล็กตรอนให้อยู่ในลักษณเดี่ยวให้มากที่สุดเท่าที่จะทำได้</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-full flex flex-col items-center justify-center space-y-10 mt-12 pb-36" id="electron-filling">
                    <p className="font-medium text-[18px] w-[200px] text-center laptop-l:text-[36px] laptop-l:w-[500px]">2.4 การบรรจุอิเล็กตรอนแบบเต็มและแบบครึ่ง</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/full-electron-fill.png" alt="full electron fill" className="w-auto h-auto rounded-md laptop-l:w-[400px]" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">การบรรจุอิเล็กตรอนแบบเต็ม</p>
                    </div>
                    <p className="text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">การบรรจุอิเล็กตรอนจนเต็มในทุกออร์บิทัลที่มีพลังงานเท่ากัน เรียกว่า "การบรรจุอิเล็กตรอนแบบเต็ม"</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/half-electron-fill.png" alt="half electron fill" className="w-auto h-auto rounded-md laptop-l:w-[400px]" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">การบรรจุอิเล็กตรอนแบบครึ่ง</p>
                    </div>
                    <p className="text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">การจัดเรียงอิเล็กตรอนอยู่เพียงครึ่งเดียว เหมือนกันทั้งหมดในทุกออร์บิทัลที่มีพลังงานเท่ากัน เรียกการบรรจุแบบนี้ว่า "การบรรจุอิเล็กตรอนแบบครึ่ง"</p>
                </div>
                <div className='max-w-[700px] mx-auto pb-32'>
                    <p className='font-medium text-[18px] mb-6 text-center laptop-l:text-[36px]'>สรุปการจัดเรียงอิเล็กตรอนในอะตอม</p>
                    <ol className="text-start max-w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:max-w-[750px] mx-auto space-y-4 border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md list-decimal">
                        <li>อิเล็กตรอนที่อยู่ชั้นพลังงานนอกสุด เรียกว่า "เวเลนซ์อิเล็กตรอน" มีค่าไม่เกิน 8</li>
                        <li>เมื่อมีการจัดเรียงอิเล็กตรอนมากขึ้น สามารถเขียนแบบย่อได้</li>
                        <li>ธาตุทรานซิชั่น จะมีการจัดเรียงอิเล็กตรอนที่แตกต่างจากธาตุปกติ</li>
                    </ol>
                </div>
                <div className="mt-12" />

            </div>
        </div>
    )
}