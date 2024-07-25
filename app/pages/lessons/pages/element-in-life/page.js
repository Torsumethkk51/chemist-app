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

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] w-[250px] laptop-l:w-[350px] text-center laptop-l:text-[36px]">7.ธาตุและสารประกอบในสิ่งมีชีวิตและสิ่งแวดล้อม</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={300} height={0} src="/lessonImages/environment.jpg" alt="democritus" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ธาตุและสารประกอบในสิ่งมีชีวิตและสิ่งแวดล้อม</p>
                        <Link href="https://www.pexels.com/search/forest/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://www.pexels.com/search/forest/</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ในการดำรงชีวิตของมนุษย์ และในระบบนิเวศต่างๆก็มีธาตุต่างๆแอบแฝงอยู่ด้วยเช่นกัน</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.1 แคลเซียม (Calcium)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/calcium.jpg" alt="calcium" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">แคลเซียม</p>
                        <Link href="https://periodictable.com/Items/020.6/index.html" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://periodictable.com/Items/020.6/index.html</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">แคลเซียมพบได้มากในส่วนที่เป็นเปลือกโลก โดยจะพบประมาณ 5.4 โดยมวลของเปลือกโลก ส่วนใหญ่จะพบอยู่ในรูปของพวกหินปูน ซึ่งมี CaCO<sub>3</sub> เป็นองค์ประกอบ เช่น ในเปลือกหอย หินปะการัง หินยอก หินย้อย</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.2 อลูมิเนียม (Aluminium)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/aluminium.jpg" alt="aluminium" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">อลูมิเนียม</p>
                        <Link href="https://www.tpa.or.th/writer/read_this_book_topic.php?bookID=1818&pageid=29&read=true&count=true" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://www.tpa.or.th/writer/read_this_book_topic.php?bookID=1818&pageid=29&read=true&count=true</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">มักอลูมิเนียมอยู่ในรูปของสารประกอบต่างๆเช่น บอกไซต์ ไครโอไลต์ โดย อลูมิเนียมจะมีสีเงิน มีความหนาแน่นต่ำ นำไฟฟ้าและความร้อนได้ดี เหนียวและแข็ง ดัดโค้งงอได้ ตีเป็นแผ่นและดึงเป็นเส้นได้</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.3 ซิลิคอน (Silicon)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/silicon.jpg" alt="silicon" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ซิลิคอน</p>
                        <Link href="https://www.thoughtco.com/silicon-facts-606595" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://www.thoughtco.com/silicon-facts-606595</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">มักพบซิลิคอนอยู่ในแร่ควอตซ์และทราย ในรูปของซิลิคอนไดออกไซด์ หรือที่เรียกว่า ซิลิกา ซึ่งมีโครงสร้างคล้ายกับเพชร แต่มีความแข็งน้อยกว่าเพชร อะตอมยึดเหนี่ยวกันด้วยพันธะ โคเวเลนต์เป็นโครงผลึกร่างตาข่าย นอกจากนี้ยังพบธาตุซิลิคอนได้ในรูปของสารประกอบซิลิเกต อีกด้วย</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.4 ไนโตรเจน (Nitrogen)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/nitrogen.jpg" alt="" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ไนโตรเจน</p>
                        <Link href="https://en.wikipedia.org/wiki/Nitrogen" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://en.wikipedia.org/wiki/Nitrogen</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ธาตุในโตรเจนพบได้ทั้งในรูปอิสระ (ในอากาศพบประมาณร้อยละ 79 โดยปริมาตร) และ ในรูปของสารประกอบในโตรเจนที่อยู่ในรูปกรดอะมิโนและโปรตีน</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.5 ฟอสฟอรัส (Phosphorus)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/phosphorus.jpg" alt="phosphorus" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ฟอสฟอรัส</p>
                        <Link href="https://theodoregray.com/PeriodicTable/Elements/015/index.s13.html" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://theodoregray.com/PeriodicTable<br/>/Elements/015/index.s13.html</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ธาตุฟอสฟอรัสจะไม่พบในรูปอิสระในธรรมชาติ แต่จะพบอยู่ในรูปสารประกอบ เช่น แร่หิน ฟอสเฟตในฟลูออโรอะป่าไตด์ และแคลเซียมฟอสเฟต นอกจากนี้ ยังพบฟอสฟอรัสได้ในไข่แดง เส้นประสาท สมอง กระดูก และพัน</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.6 ออกซิเจน (Oxygen)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/oxygen.jpg" alt="oxygen" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center"></p>
                        <Link href="https://th.bing.com/th/id/OSK.HEROUDKdvQWhfRd8vrQtpyM10gXVZm-1cq2T7XlR0ow42VU?rs=1&pid=ImgDetMain" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://th.bing.com/th/id/OSK.H<br/>EROUDKdvQWhfRd8vrQtpyM10gXVZm-1c<br/>q2T7XlR0ow42VU?rs=1&pid=ImgDetMain</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ออกซิเจนเป็นแก๊สไม่มีสี ไม่มีกลิ่น มีสมบัติช่วยให้ไฟติด เกิดสารประกอบกับธาตุต่าง ๆ ได้ดี เช่น สารประกอบออกไซด์เกิดกับธาตุโดยทั่วไป สารประกอบเปอร์ออกไซด์เกิดกับโลหะหมู่ IA และ IIA เช่น K2O, CaO, เป็นต้น สารประกอบซุปเปอร์ออกไซด์เกิดกับโลหะหมู่ LA เช่น NaO, LIO, เป็นต้น สารประกอบไฮไตรด์เกิดกับธาตุไฮโตรเจน เช่น H₂O H₂O, เป็นต้น</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.7 ไอโอดีน (Iodene)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/iodene.jpg" alt="iodene" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ไอโอดีน</p>
                        <Link href="https://en.wikipedia.org/wiki/Iodine" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://en.wikipedia.org/wiki/Iodine</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ธาตุไอโอดีนเป็นธาตุที่มีปริมาณน้อย ส่วนมากพบในสารประกอบไอโอไดด์ในน้ำทะเล ซึ่งมีความเข้มข้นเพียง 0.05 pprn โดยมวลเท่านั้น นอ ในธรรมชาติอีกแหล่งหนึ่ง คือ โดยมวล พบอยู่ในรูปของ NalO<sub>3</sub> นอกจากนี้แหล่งกำเนิดธาตุไอโอดีนที่สำคัญ ซึ่งเมื่อนำมาเผาจะได้ไอโอดีนร้อยละ 1 โดยมวล</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.8 เหล็ก (Iron)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/iron.jpg" alt="iron" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">เหล็ก</p>
                        <Link href="https://www.rwmmint.com/products/iron-ingot" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://www.rwmmint.com/products/iron-ingot</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ในธรรมชาติจะพบเหล็กอยู่ในรูปของแร่ชนิดต่าง ๆ โดยแร่เหล็กส่วนใหญ่จะอยู่ในรูปของ สารประกอบออกไซด์ เช่น แร่ฮีมาไทต์ แร่แมกนี้ไทด์ เป็นต้น ซึ่งแร่เหล่านี้ สามารถนำมาแยกเหล็กออกมาได้โดยนำไปถลุงด้วยวิธีรีดิวซ์ ด้วยการเผากับถ่านโค้กในเตาพ่นลม</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.9 ทองแดง</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/copper.jpg" alt="copper" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">ทองคำ</p>
                        <Link href="https://www.ey.com/en_ca/mining-metals/how-copper-miners-can-meet-long-term-demand" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://www.ey.com/en_ca/mining-metals/how-copper<br/>-miners-can-meet-long-term-demand</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ธรรมชาติทองแดงส่วนใหญ่จะอยู่ในรูปของแร่ซัลไฟด์และออกไซด์ ซึ่งแร่ทองแดง ใหญ่จะมีทองแดงเป็นองค์ประกอบไม่มากนัก โดยแร่สำคัญที่พบทองแดง คือ แรดาลโดไหไรท์ นอกจากนี้ยังมีแร่อื่น ๆ อีก เช่น แร่คาลโคไซด์ แร่โคเวลไลด์ แร่คิวไพรด์ แร่มาลาไคต์ แร่เทนอไรต์ เป็นต้น</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.10 สังกะสี (Zinc)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/zinc.jpg" alt="zinc" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">สังกะสี</p>
                        <Link href="https://swideaki.blogspot.com/2023/03/como-es-el-zinc.html" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://swideaki.blogspot.com<br/>/2023/03/como-es-el-zinc.html</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ในธรรมชาติมักจะพบสังกะสีอยู่ในแร่ต่าง ๆ จำนวนมาก โดยแร่ที่สำคัญ คือ แร่สฟาเลอไรด์ หรือซิงค์เบลน แร่เฮมิมอร์ไฟต์ แร่สมิทโซไนท์ และแร่ ซิงค์ไคต์</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.11 โครเมียม (Chromium)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/chromium.jpg" alt="chromium" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">โครเมียม</p>
                        <Link href="https://simple.wikipedia.org/wiki/Chromium" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://simple.wikipedia.org/wiki/Chromium</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ในธรรมชาติพบอยู่ในรูปของออกไซด์ผสม เช่น ในแรโครไมด์ ซึ่งเมื่อน่า แร่โครไมด์มาเผากับโพแทสเซียมคาร์บอเนต ในอากาศ จะเกิดโพแทสเซียมโครเมต จากนั้นนำไปเผารวมกับคาร์บอนและอะลูมิเนียม จะได้โลหะโครเมียมบริสุทธิ์ออกมา ซึ่งมีลักษณะเป็นของแข็งที่แข็งมาก สีขาวเงิน มีความมันวาว มีจุดหลอมเหลวและจุดเดือดสูง และทนต่อการผุกร่อน</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">7.12 เรเดียม (Radium)</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={150} height={0} src="/lessonImages/radium.jpg" alt="radium" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px] laptop-l:w-[300px] text-center">โครเมียม</p>
                        <Link href="https://www.chemistrylearner.com/radium.html" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก<br/> https://www.chemistrylearner.com/radium.html</Link>
                    </div>
                    <p className="laptop-l:text-[14px] laptop-l:w-[750px] text-center text-[8px] w-[200px]">ธาตุเรเดียมเป็นธาตุกัมมันตรังสี สามารถเตรียมได้จากกระบวนการการแยกสลายสาร ประกอบแฮไลด์ของเรเดียมด้วยไฟฟ้าโดยใช้ปรอทเป็นขั้ว ซึ่งไอโซโทปที่เสถียรที่สุด คือ เรเดียม-226 (Ra-226)</p>
                </div>

                <div className="mt-24" />

            </div>
        </div>
    )
}