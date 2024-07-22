'use client'
import AppHeader from "@/app/components/AppHeader";
import LessonPrevious from "@/app/components/lessonPrevious";
import VideoBg from "@/app/components/VideoBg";
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
            <VideoBg bgUrl={"/bgVideos/lessonsBg.mp4"} />
            <AppHeader latestScroll={latestScroll} />
            <div className="pt-[60px]">

                <LessonPrevious latestScroll={latestScroll} />

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">3.ตารางธาตุ</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/periodic-table.png" alt="periodic table" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ตารางธาตุ</p>
                        <Link href="https://th.wikipedia.org/wiki/%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px]">ขอขอบคุณภาพจาก https://th.wikipedia.org/wiki/%E0%B<br/>8%95%E0%B8%B2%E0%B8%A3%E0%B<br/>8%B2%E0%B8%87%E0%B8%98%E0%<br/>B8%B2%E0%B8%95%E0%B8%B8</Link>
                    </div>
                    <p className="w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">เนื่องจากมีการพบธาตุจำนวนมาก นักวิทยาศาสตร์จึงได้จำแนกและจัดหมวดหมู่ของธาตุที่คล้ายคลึงกันใหเอยู่รวมกัน จนเกิดเป็นตารางธาตุที่ใช้กันในปัจจุบัน</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">3.1 วิวัฒนาการของตารางธาตุ</p>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex space-x-2">
                            <div>
                                <Image width={300} height={0} src="/lessonImages/periodic-table-ex1.png" alt="evole of periodic table" className="w-[100px] h-auto rounded-md laptop-l:w-auto" />
                                <Image width={300} height={0} src="/lessonImages/periodic-table-ex2.png" alt="evole of periodic table" className="w-[100px] h-auto rounded-md laptop-l:w-auto" />
                            </div>
                        </div>
                        <p className="text-[10px laptop-l:text-[20px] laptop-l:w-[300px] text-center">การวิวัฒนการของตารางธาตุยุคต่างๆ</p>
                        <div className="text-center">
                            <Link href="https://commons.wikimedia.org/wiki/File:Masson_main_table_1895.png" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px]">ขอขอบคุณภาพจาก<br/> https://commons.wikimedia<br/>.org/wiki/File:Masson_main_table_1895.png <br/>และ<br/> </Link>
                            <Link href="https://commons.wikimedia.org/wiki/File:Errera_1900.png" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px]">https://commons.wikimedia.org/wiki/File:Errera_1900.png</Link>
                        </div>
                    </div>
                    <p className="w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">จนกว่าจะมาเป็นตารางธาตุ แบบที่ใช้กันในปัจจุบันในอดีตก็ยังมีตารางธาตุที่เป็นต้นแบบของตารางธาตุในปัจจุบัน วิวัฒนาการของตารางธาตุมีดังนี้</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">3.1.1 โยฮันน์ เดอเบอไรดนอร์</p> 
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={250} height={0} src="/lessonImages/dobereiner.jpg" alt="dobereiner" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">โยฮันน์ เดอเบอไรดนอร์</p>
                        <Link href="https://en.wikipedia.org/wiki/D%C3%B6bereiner%27s_triads" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px]">ขอขอบคุณภาพจาก<br/> https://en.wikipedia.or<br/>g/wiki/D%C3%B6bereiner%27s_triadsg</Link>
                    </div> 
                    <p className="w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">โยฮันน์ เดอบอร์ไรเนอร์ นักวิทยาศาสตร์คนแรกที่เสนอแนวคิดเกี่ยวกับ การจัดเรียงตารางธาตุ โดยเสนอว่า "เมื่อเรียงมวลอะตอมจากน้อยไปมาก มวลอะตอมของธาตุที่อยู่ตรงกลางจะเป็นค่าเฉลี่ยของมวลอะตอมของธาตุตัวบนและล่าง" ซึ่งเรียกการจัดแบบนี้ว่า "กฎชุดสาม"</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/three-rule-johann.png" alt="three rule of johann" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ตัวอย่างกฎชุดสามของ</p>
                    </div>
                    <p className="font-semibold text-[10px] w-[250px] text-center laptop-l:text-xl laptop-l:w-[800px]">ตารางธาตุ ที่เดอบอร์ไรเนอร์เสนอนั้น ไม่สามารถอธิบายการจัดธาตุไปเป็นตามกฎชุดสามได้ทั้งหมด กฎนี้จึงไม่เป็นที่ยอมรับ</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">3.1.2 จอห์น นิวแลนด์</p> 
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={250} height={0} src="/lessonImages/newlands.jpg" alt="newlands" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">จอห์น นิวแลนด์</p>
                        <Link href="https://www.pinterest.com/pin/565272190701778208/" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px]">ขอขอบคุณภาพจาก<br/> https://www.pinterest.com/pin/<br/>565272190701778208/</Link>
                    </div> 
                    <p className="w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">จอห์น นิวแลนด์ ได้นำเสนอกฎออกเตต ซึ่งมีใจความว่า "ถ้านำธาตุมา 8 ธาตุ มาจัดเรียงตามมวลจากน้อยไปมาก ธาตุตัวที่ 8 จะมีสมบัติคล้ายคลึงกับธาตุตัวที่ 1 เสมอ (ไม่รวมไฮโดรเจนกับฮีเลียม)"</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/newlands-table.png" alt="newlands table" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ตารางธาตุของนิวแลนด์</p>
                    </div>
                    <p className="font-semibold text-[10px] w-[250px] text-center laptop-l:text-xl laptop-l:w-[800px]">ตารางธาตุนี้ ใช้อธิบายได้เฉพาะธาตุที่มวลอะตอมน้อยๆ เท่านั้น ทำให้แนวคิดนี้ไม่เป็นที่ยอมรับ ในเวลาต่อมต่อมา</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">3.1.3 ดิมิทรี อิวาโนวิช เมเดเลเอฟ</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={250} height={0} src="/lessonImages/mendeleev.jpg" alt="mendeleev" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ดิมิทรี อิวาโนวิช เมเดเลเอฟ</p>
                        <Link href="https://commons.wikimedia.org/wiki/File:Mendeleev_Photographische_Gesellschaft_3.jpg" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://commons.wikimedia.org/wiki/File:<br/>Mendeleev_Photographische_Gesellschaft_3.jpg</Link>
                    </div> 
                    <p className="w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">"ดิมิทรี อิวาโนวิช เมเดเลเอฟ" และ "ยูลิอุส โลทาร์ ไมเออร์" ทั้งสองได้มีความคิดคล้ายกันว่า "เมื่อจัดเรียงธาตุตามน้ำหนักที่เพิ่มขึ้น จะได้กลุ่มของธาตุ ที่มีสมบัติทางเคมีและกายภาพเป็นชุดๆ" โดยต่อมาเรียกแนวคิดนี้ว่า "กฎพิริออดิก" </p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/mendeleev-table.jpg" alt="mendeleev table" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ตารางธาตุของเมเดเลเอฟ</p>
                        <Link href="https://www.pinterest.com/pin/633811347559125992/" className="text-[10px] w-[200px] laptop-l:text-[18px] laptop-l:w-[400px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://www.pinterest.com/pin/<br/>633811347559125992/</Link>
                    </div>
                    <p className="font-semibold text-[10px] w-[250px] text-center laptop-l:text-xl laptop-l:w-[800px]">ทั้งนี้ ผลงานของเมนเดเลเอฟได้รับการยอมนับมากกว่าผลงานของไมเออร์ เพราะผลงานของเมเดเลเอฟมีการพัฒนาและเผบแพร่อย่างต่อเนื่อง จึงทำให้เขาได้รับเกียรติโดยตั้งชื่อเขาเป็นเป็นชื่อตารางธาตุว่า "ตารางธาตุของเมเดเลเอฟ"</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">3.1.4 เฮนรี โมสลีย์</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={250} height={0} src="/lessonImages/henry.jpg" alt="henry" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">เฮนรี โมสลีย์</p>
                        <Link href="hhttps://panyasociety.com/pages/%E0%B9%80%E0%B8%84%E0%B8%A1%E0%B8%B5-10-%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/>   https://panyasociety.com/pages/%E0%B9%80%<br/>E0%B8%84%E0%B8%A1%E0%B8%B5-10-%E0%B9%80%E0%B8%A3%E0%B8%B7<br/>%E0%B9%88%E0%B8%AD%E0%B8%87%E<br/>0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A<br/>3%E0%B8%B9%E0%B9%89%E0%B9%80%E0<br/>%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2/</Link>
                    </div> 
                    <p className="w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">"เฮนรี โมสลีย์" ได้พัฒนากฎพิริออดิกใหม่ว่า "ควรจัดเรียงตามเลขอะตอม เนื่องจากสมบัติต่างๆ ของธาตุมีความสัมพันธ์กับโปรตอนในนิวเคลียส หรือเลขอะตอมมากกว่ามวลอะตอม"</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/henry-table.png" alt="henry-table" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ตารางธาตุของโมสลีย์</p>
                        <Link href="https://web.facebook.com/439671992754200/photos/d41d8cd9/439672672754132/?_rdc=1&_rdr" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://web.facebook.com/439671992754200/<br/>photos/d41d8cd9/439672672754132/?_rdc=1&_rdr</Link>
                    </div>
                    <p className="font-semibold text-[10px] w-[250px] text-center laptop-l:text-xl laptop-l:w-[800px]">นอกจากนี้โมสลีย์ยังทำนายไว้อีกว่า ต้องเผื่อช่องว่างไว้ เพื่อรอการค้นพบธาตุใหม่ในอนาคต ดังนั้นตารางธาตุที่ใช้ในปัจจุบัน จึงได้รับการปรับปรุงมาจาก ตารางธาตุของเมเดเลเอฟ โดยเรียงธาตุตามลำดับของเลขอะตอมจากน้อยไปมาก แทนการเรียงตามมวลอะตอม</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">3.2 หมู่และคาบของตารางธาตุ</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/periodic-table.png" alt="periodic table" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ตารางธาตุ</p>
                        <Link href="https://th.wikipedia.org/wiki/%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://th.wikipedia.org/wiki/%E0%B<br/>8%95%E0%B8%B2%E0%B8%A3%E0%B<br/>8%B2%E0%B8%87%E0%B8%98%E0%<br/>B8%B2%E0%B8%95%E0%B8%B8</Link>
                    </div>
                    <p className="w-[200px] text-[8px] laptop-l:text-[14px] laptop-l:w-[750px] text-center">ตารางธาตุที่ใช้อยู่ในปัจจุบัน ธาตุที่อยู่แนวตั้ง เรียกว่า หมู่ (Group) แบ่งได้ 18 แถว ธาตุที่อยู่แนวนอน เรียกว่า คาบ (Periods) แบ่งเป็น 7 คาบ</p>
                </div>
                
                <div className="mt-8">
                    <p className="font-medium text-[15px] ml-6 laptop-l:ml-60 laptop-l:text-[25px]">หมู่ (Group)</p>
                    <ol className="text-start laptop-l:text-[14px] laptop-l:max-w-[750px] list-disc max-w-[200px] mx-auto my-4 space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>แบ่งเป็น 2 กลุ่มใหญ่ๆ คือ ธาตุกลุ่ม A เรียกว่า ธาตุเรพรีเซนเททีฟ และธาตุกลุ่ม B เรียกว่าธ่ตุทรานซิชั่น</li>
                        <li>ตามระบบ IUPAC ธาตุในกลุ่ม A ประกอบด้วยหมู่ 1, 2, 3, 13-18 และธาตุในกลุ่ม B หมู่ 3-12</li>
                        <li>ตามระบบของสหรัฐอเมริกา ธาตุในกลุ่ม A ประกอบด้วยหมู่ 1A-8A และธาตุกลุ่ม B ประกอบด้วยหมู่ 1B-8B (โดยเรียงจาก 3B, 4B, 5B, 6B, 7B, 8B, 1B, 2B ตามลำดับ)</li>
                    </ol>
                </div>

                <div className="mt-8">
                    <p className="font-medium text-[15px] ml-6 laptop-l:ml-60 laptop-l:text-[25px]">คาบ (Periods)</p>
                    <ol className="text-start laptop-l:text-[14px] laptop-l:max-w-[750px] list-disc max-w-[200px] mx-auto my-4 space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>คาบที่ 1 มี 2 ธาตุ</li>
                        <li>คาบที่ 2 และ 3 มีธาตุคาบละ 8 ธาตุ</li>
                        <li>คาบที่ 4 และ 5 มีธาตุคาบละ 18 ธาตุ</li>
                        <li>คาบที่ 6 มีธาตุทั้งหมด 32 ธาตุ โดยแบ่งเป็นธาตุกลุ่มแรก ซึ่งประกอบด้วยธาตุกลุ่ม A และ B จำนวน 18 ธาตุ และธาตุในกลุ่มธาตุแลนทาไนด์จำนวน 14 ธาตุ</li>
                        <li>คาบที่ 7 มีธาตุทั้งหมด 32 ธาตุ โดยแบ่งเป็นธาตุกลุ่มแรก ซึ่งประกอบด้วยธาตุกลุ่ม A และ B จำนวน 18 ธาตุ และธาตุในกลุ่มธาตุแอกทิไนด์จำนวน 14 ธาตุ</li>
                    </ol>
                </div>
                <div className="mt-24" />

            </div>
        </div>
    )
}