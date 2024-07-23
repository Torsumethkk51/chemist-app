'use client'
import AppHeader from "@/app/components/AppHeader";
import LessonPrevious from "@/app/components/lessonPrevious";
import VideoBg from "@/app/components/VideoBg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three-stdlib";

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

    const [dalton, setDalton] = useState(null);
    const [thomson, setThomson] = useState(null);
    const [rutherford, setRutherford] = useState(null);
    const [bohr, setBohr] = useState(null);
    const [fog, setFog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const loader = new GLTFLoader();

            loader.load("/dalton/dalton.gltf", (gltf) => {
                setDalton(gltf);
            },
                undefined,
                (error) => {
                    console.error("An error happened", error);
                    setError(error);
                }
            );

            loader.load("/thom/thomson.gltf", (gltf) => {
                setThomson(gltf);
            },
                undefined,
                (error) => {
                    console.error("An error happened", error);
                    setError(error);
                }
            );

            loader.load("/rutf/rutherford.gltf", (gltf) => {
                setRutherford(gltf);
            },
                undefined,
                (error) => {
                    console.error("An error happened", error);
                    setError(error);
                }
            );

            loader.load("/bohr/bohrv.gltf", (gltf) => {
                setBohr(gltf);
            },
                undefined,
                (error) => {
                    console.error("An error happened", error);
                    setError(error);
                }
            );

            loader.load("/fog/fog-group.gltf", (gltf) => {
                setFog(gltf);
            },
                undefined,
                (error) => {
                    console.error("An error happened", error);
                    setError(error);
                }
            );

    }, []);

    const imageLoader = ({ src, width, quality }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <div>
            <VideoBg bgUrl={"/bgVideos/lessonsBg.mp4"} />
            <AppHeader latestScroll={latestScroll} />
            <div className="pt-[60px]">

                <LessonPrevious latestScroll={latestScroll} />

                <div className="h-auto flex flex-col items-center space-y-2 my-12 mt-24 laptop-l:mt-12">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">1.แบบจำลองอะตอม</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={250} height={0} src="/lessonImages/democritus.jpg" alt="democritus" className=" w-[100px] laptop-l:w-auto h-auto rounded-md object-cover" />
                        <p className="text-[10px] laptop-l:text-[20px]">Democritus</p>
                        <Link href="https://ch.pinterest.com/pin/771874823630637864/" className="text-[10px] laptop-l:text-[18px] w-[300px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://ch.pinterest.<br/>com/pin/771874823630637864/</Link>
                    </div>
                    <p className="text-center text-[8px] laptop-l:text-[14px] laptop-l:w-[650px] w-[200px]">"แนวคิดของดีโมเครตุส(Democritus)" ซึ่งเป็นแนวคิดที่เป็นจุดเริ่มต้นของการศึกษาอะตอม ในแนวคิดนี้ได้กล่าวว่า <br /> "อะตอม คืออนุภาคที่มีขนาดเล็กมาก และไม่สามารถแบ่งย่อยได้อีก"</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="dalton-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">1.1 แบบจำลองอะตอมของดอลตัน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={250} height={0} src="/lessonImages/dalton.jpg" alt="dalton" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px]">John Dalton</p>
                        <Link href="https://www.amiannoying.com/(S(4ks2ax0xwv5mclgthbkkr3gx))/collection.aspx?collection=14017" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.amiannoying.com/(S(4ks2ax0xwv<br />5mclgthbkkr3gx))/collection.aspx?collection=14017</Link>
                    </div>
                    <p className="text-center text-[8px] w-[200px] laptop-l:text-[14px] laptop-l:w-[750px]">เมื่อความรู้ทางวิทยาศาสตร์มีความก้าวหน้ามากขึ้น ทำให้ "แนวคิดของดีโมเครตุส" ไม่สามารถอธิบายเหตุการณ์ต่างๆที่เกิด ขึ้นกับสสารได้ <br /> ดังนั้นใน ต้น ค.ศ ที่ 19 "จอห์น ดอลตัน" นักวิทยาศาสตร์ชาวอังกฤษได้ พัฒนาแนวคิดเกี่ยวกับอะตอมและ สรุปได้ดังนี้</p>
                    <div className="flex flex-col items-center space-y-4">
                         <Canvas>
                            <OrbitControls enableRotate autoRotate />
                            <ambientLight intensity={2} />
                            <directionalLight intensity={4} position={[-5, 5, 0]} />
                            {dalton && dalton.scene && <primitive object={dalton.scene} scale={2} />}
                        </Canvas>
                        <p className="text-[10px] laptop-l:text-[20px]">แบบจำลองอะตอมของดอลตัน</p>
                    </div>
                    <ul className="text-start w-[200px] laptop-l:text-[14px] laptop-l:w-[750px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>1.1.1 ธาตุแต่ละชนิดจะประกอบด้วยอนุภาคที่เล็กที่สุด เรียกว่า "อะตอม" ซึ่งอะตอมไม่สามารถแยกออกไปได้อีก <br /> และไม่สามารถถูกสร้างขี้นหรือ ทำลายได้ ในระหว่างที่เกิดปฏิกริยาเคมี</li>
                        <li>1.1.2 อะตอมในธาตุ "ชนิดเดียวกัน" จะมีมวล และ สมบัติต่างๆเหมือนกัน เช่นเดียวกันในอะตอมในธาตุ "ต่างชนิดกัน" จะมีมวล และ สมบัติแตกต่างกัน</li>
                        <li>1.1.3 "สารประกอบเคมี" เกิดจาก อะตอม ของธาตุตั้งแต่ 2 ชนิดขึ้นไปมารวมตัวกันด้วยพันธะเคมี <br /> โดยมีอัตราส่วนของ จำนวนอะตอมที่เป็นเลขลงตัวอย่างต่ำ</li>
                    </ul>
                    <p className="font-semibold text-[10px] w-[200px] text-center laptop-l:text-xl laptop-l:w-[500px]">ในเวลาต่อมต่อมา นักวิทยาศาสตร์ได้ศึกษเกี่ยวกับ <br /> "อะตอม" มากขึ้น และพบข้อมูลบางอย่าง ที่ไม่สอดคล้องกับแนวคิดของดอลตัน ทำให้เกิด</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="thomson-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">1.2 แบบจำลองอะตอมของทอมสัน</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={250} height={0} src="/lessonImages/crookes.jpg" alt="crookes" className="w-[100px] laptop-l:w-auto h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px]">William Crookes</p>
                        <Link href="https://hmong.in.th/wiki/William_Crookes" className="text-[10px]  laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://hmong.in.th/wiki/William_Crookes</Link>
                    </div>
                    <p className="w-[200px] text-center text-[8px] laptop-l:text-[14px] laptop-l:w-[750px]">"เซอร์วิลเลียม ครูกส์"  ได้ทำการศึกษา เกี่ยวกับการสร้างประจุไฟฟ้า โดยให้ศักย์ไฟฟ้าผ่านหลอดที่สูบอากาศออกหมด ซึ่งเมื่อผ่านกระแสไฟฟ้าแรงสูงเข้าไป พบว่า เกิดรังสีขึ้นภายในหลอด โดยรังสีเคลื่อนที่จากขั้วแคโทด (ขั้วลบ) ไปยังขั้วแอโนด (ขั้วบวก) ครูกส์เรียกรังสีชนิดนี้ว่า "รังสีแคโทด" และเรียกหลอดแก้วชนิดนี้ว่า "หลอดรังสีแคโทด" </p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={100} height={0} src="/lessonImages/cathode-tube.jpg" alt="cathode ray tube" className="w-auto laptop-l:w-[300px] h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px]">หลอดรังสีแคโทด </p>
                        <Link href="https://physics.williams.edu/demonstrations/em/electron-beam/" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://physics.williams.edu/de<br />monstrations/em/electron-beam/</Link>
                    </div>
                    <p className="w-[200px] text-center text-[8px] laptop-l:text-[14px] laptop-l:w-[750px]">ต่อมา "เซอร์โจเซฟ จอห์น ทอมสัน" นักวิทยาศาสตร์ชาวอังกฤษ ได้ทำการทดลองเกี่ยวกับอะตอมใหม่ โดยการดัดแปลงหลอดรังสีแคโทดของ เซอร์วิลเลียม ครูกส์ เป็นอุปกรณ์ในการใช้ทดลอง</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={75} height={0} src="/lessonImages/thomson.jpg" alt="thomson" className="w-auto laptop-l:w-[200px] h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px]">Joseph John Thomson</p>
                        <Link href="https://thn25508ch.blogspot.com/p/21_15.html" className="text-[10px]  laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://thn25508ch.blogspot.com/p/21_15.html</Link>
                    </div>
                    <p className="w-[200px] text-center text-[8px] laptop-l:text-[14px] laptop-l:w-[750px]">ในระหว่างช่วงเวลาที่ทำการค้นคว้าและทดลอง ทอมสันก็ได้รู้ว่า "อนุภาคแคโทดมีประจุลบ" และเรียกอนุภาคดังกล่าวว่า "อิเล็กตรอน" แล้วก็มีนักวิทยาศาสตร์หลายคนนำ"หลอดรังสีแคโทด" มาดัดแปลงจนได้มีการพบอนุภาค "โปรตอน" นั่นคือการทดลองของ "ออยเกิน โกลด์ซไตน์" หลังจากหลายการทดลองดังกล่าวผ่านมา ทำให้ทอมสันได้ข้อมูลเกี่ยวกับอะตอมมากขึ้น และได้นำเสนอแบบจำลองอะตอมใหม่ ขึ้นมาแทนแบบจำลองอะตอมของดอลตัน และสรุปแบบจำลองอะตอม นี้ไว้ว่า</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Canvas>
                            <OrbitControls enableRotate autoRotate />
                            <ambientLight intensity={2} />
                            <directionalLight intensity={4} position={[-5, 5, 0]} />
                            {thomson && thomson.scene && <primitive object={thomson.scene} scale={3} />}
                        </Canvas>
                        <p className="text-[10px] laptop-l:text-[20px]">แบบจำลองอะตอมของทอมสัน</p>
                    </div>
                    <ul className="text-start w-[200px] laptop-l:text-[14px] laptop-l:w-[750px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>1.2.1 "อะตอม" มีลักษณะเป็นทรงกลม  ซึ่งประกอบด้วย "โปรตอน" และ "อิเล็กตรอน" กระจายอยู่</li>
                        <li>1.2.2 "อะตอม" ในสภาพที่เป็นกลางทางไฟฟ้า จะมีประจุบวกและลบเท่ากัน</li>
                    </ul>
                    <p className="font-semibold text-[10px] text-center w-[200px] laptop-l:text-xl laptop-l:w-[800px]">"แบบจำลองอะตอมของทอมสัน" ถือว่าเป็นความก้าวหน้าเกี่ยวกับการศึกษา แบบจำลองอะตอม <br /> แต่ก็ยัง"ไม่สามารถ"อธิบายผลการทดลองอื่นๆ อีกมากมายได้ ดังนั้นนักวิทยาศาสตร์จึงต้องมีการค้นคว้าเพิ่มเติม เพื่อนำเสนอ <br /> แบบจำลองอะตอม ที่มี "ความใกล้เคียง" กับอะตอมของธาตุมากที่สุด ทำให้เกิด</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="rutherford-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">1.3 แบบจำลองของรัทเทอร์ฟอร์ด</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={75} height={0} src="/lessonImages/rutherford.jpg" alt="rutherford" className="w-auto laptop-l:w-[200px] h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px]">Ernest Rutherford</p>
                        <Link href="https://th.m.wikipedia.org/wiki/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C:Ernest_Rutherford_LOC.jpg" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://th.m.wikipedia.org/wiki/<br />%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9<br />%8C:Ernest_Rutherford_LOC.jpg</Link>
                    </div>
                    <p className="w-[200px] text-center text-[8px] laptop-l:text-[14px] laptop-l:w-[750px]">ในปี ค.ศ 1911 ลอร์ดเออร์เนสต์ รัทเทอร์ฟอร์ด พิสูจน์แบบจำลองของทอมสัน โดยการยิงอนุภาค แอลฟา ไปยังแผ่นทองคำบางๆ  และใช้ฉากเรื่องแสงที่เคลือบด้วย ซิงค์ซัลไฟด์ โค้งเป็นวงรอบแผ่นทองคำ เพื่อตรวจจับอนุภาคแอลฟา</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={100} height={0} src="/lessonImages/rutherford-experiment.png" alt="rutherford experiment" className="w-auto laptop-l:w-[200px] h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px]">การทดลองของรัทเทอร์ฟอร์ด</p>
                        <Link href="https://www.transtutors.com/questions/in-some-of-rutherford-rsquo-s-experiments-fig-27-ndash-19-the-a-particles-mass-6-64--715856.htm" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.transtutors.com/questions/in-some-of-rutherford-rsquo-s-experiments-fig-27-ndash-19-the-a-particles-mass-6-64--715856.htm</Link>
                    </div>
                    <p className="w-[200px] text-center text-[8px] laptop-l:text-[14px] laptop-l:w-[750px]">จากการทดลองพบว่า ส่วนใหญ่การเรืองแสงบนฉากจะอยู่ที่บริเวณด้านหลังของแผ่นทองคำ และมีบางครั้งที่เกิดการเรืองแสงบริเวณด้านข้าง และน้อยครั้งมากที่มีการเรืองแสงบริเวณด้านหน้า และหากแบบจำลองอะตอมไปตามที่ทอมสันศึกษา การเรืองแสงน่าจะมีการเบี่ยงเบนอย่างสม่ำเสมอ รัทเทอร์ฟอร์ดจึงได้เสนอแบบจำลองอะตอมขึ้นมาใหม่ และสรุปออกมาดังนี้</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Canvas>
                            <OrbitControls enableRotate autoRotate />
                            <ambientLight intensity={2} />
                            <directionalLight intensity={4} position={[-5, 5, 0]} />
                            {rutherford && rutherford.scene && <primitive object={rutherford.scene} scale={0.35} />}
                        </Canvas>
                        <p className="text-[10px] laptop-l:text-[20px]">แบบจำลองของรัทเทอร์ฟอร์ด</p>
                    </div>
                    <ul className="text-start w-[200px] laptop-l:text-[14px] laptop-l:w-[750px] space-y-[15px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>1.3.1 อะตอมประกอบด้วย นิวเคลียสที่มีขนาดเล็กมากและมีประจุบวก อยู่ตรงกลางของอะตอม <br /> และมีอิเล็กตรอนวิ่งอยู่รอบๆวิ่งอยู่รอบๆ นิวเคลียส</li>
                    </ul>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="bohr-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">1.4 แบบจำลองอะตอมของโบร์</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={75} height={0} src="/lessonImages/bohr.jpg" alt="bohr" className="w-auto h-auto rounded-md laptop-l:w-[200px]" />
                        <p className="text-[10px] laptop-l:text-[20px]">Niels Bohr</p>
                        <Link href="https://www.wikiwand.com/th/%E0%B8%99%E0%B8%B5%E0%B8%A5%E0%B8%AA%E0%B9%8C_%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.wikiwand.com/th/%E0%B8%99%<br />E0%B8%B5%E0%B8%A5%E0%B8%AA%E0%B9<br />%8C_%E0%B8%9A%E0%B8%AD%E0<br />%B8%A3%E0%B9%8C</Link>
                    </div>
                    <p className="w-[200px] text-center text-[8px] laptop-l:text-[14px] laptop-l:w-[750px]">"นีลส์ โบร์" ได้ทำการศึกษา และแก้ไขแบบจำลองของรัทเทอร์ฟอร์ด เนื่องจากแบบจำลองอะตอมของรัทเทอร์ฟอร์ด ไม่ได้อธิบายว่าอิเล็กตรอนอยู่บริเวณใดของอะตอม และอยู่ในลักษณะใด ต่อมานักวิทยาศาสตร์จึงนำ ความรู้ด้านควอนตัมฟิสกิส์ มาเพื่ออธิบายตำแหน่งของอิเล็กตรอน และเพื่อสร้างแบบจำลองอะตอมขึ้นมาใหม่ ซึ่งใช้วิธี "การศึกษาสเปกตรัมของ สารประกอบและธาตุ"</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={100} height={0} src="/lessonImages/element-spectrum.jpg" alt="element spectrum" className="w-auto laptop-l:w-[200px] h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px]">การศึกษาสเปกตรัมของ สารประกอบและธาตุ</p>
                        <Link href="https://www.quora.com/What-is-the-ingredient-in-sunscreen-that-protects-you-from-UV-radiation" className="text-[10px] laptop-l:text-[18px] laptop-l:w-[400px] w-[200px] text-center font-medium pb-4">ขอขอบคุณภาพจาก https://www.quora.com/What-is-the-ingredient-in-sunscreen-that-protects-you-from-UV-radiation</Link>
                    </div>
                    <p className="w-[200px] text-center text-[8px] laptop-l:text-[14px] laptop-l:w-[750px]">จากนั้นการศึกษาเกี่ยวกับ เส้นสเปกตรัมของไฮโดรเจน ทำให้ เป็นการนำไปสู่ การเสนอ "แบบจำลองอะตอมของโบร์" โดยใน ค.ศ 1913 นีลส์ โบร์ นักวิทยาศาสตร์ชาวเดนมาร์ก ได้นำความรู้ด้านสเปกตรัม มาสร้างแบบจำลองอะตอมขึ้นมาใหม่ และสรุปแบบจำลองอะตอมได้ดังนี้</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Canvas>
                            <OrbitControls enableRotate autoRotate />
                            <ambientLight intensity={2} />
                            <directionalLight intensity={4} position={[-5, 5, 0]} />
                            {bohr && bohr.scene && <primitive object={bohr.scene} scale={2.5} />}
                        </Canvas>
                        <p className="text-[10px] laptop-l:text-[20px]">แบบจำลองอะตอมของโบร์</p>
                    </div>
                    <ul className="text-start w-[200px] space-y-[15px] laptop-l:text-[14px] laptop-l:w-[750px] text-[8px] border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md">
                        <li>1.4.1 อะตอมมี "นิวเคลียส" อยู่ตรงกลางของ "อะตอม" โดยมี "อิเล็กตรอน" เคลื่อนที่อยู่โดยรอบอะตอมเป็น "ระดับพลังงาน" ที่มีค่าพลังงานเฉพาะ คล้ายวงโคจรของดาวเคราะห์รอบดังอาทิตย์</li>
                        <li>1.4.2 ระดับพลังงานแต่ละชั้นจะมี พลังงาน "ไม่เท่ากัน" โดยชั้นระดับพลังงานที่อยู่ใกล้นิวเคลียสที่สุด <br /> จะมีพลังงานต่ำที่สุด และชั้นถัดๆไป จะมีพลังงานสูงขึ้นตามลำดับ</li>
                    </ul>
                    <p className="font-semibold text-[10px] text-center w-[200px] laptop-l:text-xl laptop-l:w-[800px]">แต่ แบบจำลองอะตอมของโบร์มีข้อจำกัด คือ <br /> ไม่สามารถอธิบายการเกิดสเปกตรัมที่เกิดจากอะตอมของธาตุที่มีหลายอิเล็กตรอนได้ ทำให้เกิด</p>
                </div>

                <hr className="max-w-[90%] mx-auto mt-24"></hr>

                <div className="h-auto flex flex-col items-center space-y-10 mt-24" id="quantum-atomic-model">
                    <p className="font-medium text-[18px] laptop-l:text-[36px]">1.5 แบบจำลองอะตอมแบบกลุ่มหมอก</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Image width={75} height={0} src="/lessonImages/erwin.jpg" alt="erwin schrodinger" className="w-auto laptop-l:w-[200px] h-auto rounded-md" />
                        <p className="text-[10px] laptop-l:text-[20px]">Erwin Schrödinger</p>
                        <Link href="https://eo.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger" className="text-[10px] w-[200px] text-center font-medium pb-4 laptop-l:text-[18px] laptop-l:w-[400px]">ขอขอบคุณภาพจาก https://eo.wikipedia.org/wiki/<br />Erwin_Schr%C3%B6dinger</Link>
                    </div>
                    <p className="w-[200px] text-center text-[8px] laptop-l:text-[14px] laptop-l:w-[750px]">ต่อมา นักวิทยาศาสตร์ได้ศึกษาเกี่ยวกับพฤติกรรมของอิเล็กตรอน พบว่า อิเล็กตรอนสามารถเป็นได้ทั้งคลื่นและ อนุภาค ซึ่งการค้นพบนี้ทำให้ <br /> นักวิทยาศาสตร์เลิกศึกษา ตำแหน่งของอิเล็กตรอน แต่มาศึกษา "โอกาสหรือความเป็นไปได้ที่จะพบอิเล็กตรอนในบริเวณรอบๆ นิวเคลียส" จากการศึกษาพบว่า บริเวณที่มีโอกาสพบอิเล็กตรอนมากกว่าที่อื่น คือ บริเวณใกล้นิวเคลียส และโอกาสที่จะพบอิเล็กตรอนในระยะห่างออกไปจะค่อยๆ น้อยลงตามลำดับ หลังจากการศึกษาต่างๆ นักวิทยาศาสตร์ก็ได้นำเสนอแบบจำลองอะตอมแบบกลุ่มหมอก และสรุป "แบบจำลองอะตอมแบบกลุ่มหมอก" ออกมาดังนี้</p>
                    <div className="flex flex-col items-center space-y-4">
                        <Canvas>
                            <OrbitControls enableRotate autoRotate />
                            <ambientLight intensity={2} />
                            <directionalLight intensity={4} position={[-5, 5, 0]} />
                            {fog && fog.scene && <primitive object={fog.scene} scale={2.5} />}
                        </Canvas>
                        <p className="text-[10px] laptop-l:text-[20px]">แบบจำลองอะตอมแบบกลุ่มหมอก</p>
                    </div>
                    <ul className="text-start w-[200px] text-[8px] space-y-4 border-white border-[2px] p-8 bg-black/10 backdrop-blur-[15px] rounded-md laptop-l:text-[14px] laptop-l:w-[750px]">
                        <li>1.5.1 อะตอมมี "นิวเคลียส" อยู่ตรงกลาง มีอิเล็กตรอนวิ่งอยู่รอบๆนิวเคลียสทั่วทั้งอะตอม <br /> โดยมีทิศทางการวิ่งไม่แน่นอน ทำให้สามารถพบ อิเล็กตรอนในบริเวณต่างๆของอะตอมมีได้ "ไม่เท่ากัน"</li>
                        <li>1.5.2 บริเวณที่มีกลุ่มหมอกหนาแน่นจะพบอิเล็กตรอนมากซึ่งอยู่บริเวณใกล้ๆ นิวเคลียส <br /> เมื่ออยู่ห่างนิวเคลียส กลุ่มหมอกจะจางลงมีโอกาสพบอิเล็กตรอนน้อย</li>
                    </ul>
                    <p className="font-semibold text-[10px] text-center w-[200px] laptop-l:text-xl laptop-l:w-[800px]">แบบจำลองอะตอมต่างๆ นั้นถูกสร้างขึ้นมาตามจินตนาการบนพื้นฐาน ของความรู้ในยุคนั้นๆ และเมื่อนักวิทยาศาสตร์เจอข้อบกพร่อง หรือมีความรู้ใหม่ๆมา แบบจำลองอะตอมก็จะพัฒนาไปตามความรู้ในยุคนั้น เพื่อให้เกิดความเข้าใจที่ถูกต้องเกี่ยวกับอะตอม</p>
                </div>
                <div className="mt-24" />

            </div>
        </div>
    )
}