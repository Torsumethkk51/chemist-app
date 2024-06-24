'use client'
import { Suspense, useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import Aos from "aos";
import "aos/dist/aos.css"
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import VideoBg from "./components/VideoBg";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

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
      <section>
        <AppHeader latestScroll={latestScroll} />
        <VideoBg bgUrl={"/bgVideos/homeBg.mp4"}/>
        <div className="h-[100vh] flex flex-col justify-center items-center text-center">
          <div>
            <TypeAnimation
              sequence={[
                'ยินดีต้อนรับสู่ ChemistryDocs!',
              ]}
              wrapper="p"
              speed={50}
              style={{ fontSize: '3em', display: 'inline-block' }}
              repeat={0}
              className="font-medium"
            />
          </div>
          <div className="mt-6">
            <TypeAnimation
              sequence={[
                'เว็บไซต์นี้เกี่ยวกับ "วิชาเคมี"',
                1000,
                'เว็บไซต์นี้เป็นเว็บไซต์ "วิทยาศาสตร์"',
                1000,
                'เว็บไซต์นี้สอนเรื่อง "อะตอม"',
                1000,
                'เว็บไซต์นี้สอนเรื่อง "ธาตุ"',
                1000,
                'เว็บไซต์นี้เป็น "แหล่งเรียนรู้"',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
              className="font-semibold"
            />
          </div>
          <div className="text-xl pb-5 pt-10 space-y-2" data-aos="zoom-in">
            <p>เว็บไซต์จัดเพื่อขึ้นเพื่อเป็นเว็บไซต์ เพื่อการศึกษาในรายวิชาเคมี เรื่องอะตอมและธาตุ</p>
            <p>และเว็บไซต์นี้เป็นส่วนหนึ่งใน โครงงานวิทยศาสตร์และเทคโนโลยี เรื่อง การจัดทำเว็บไซต์เพื่อการศึกษา</p>
            <p>ในรายวิชาเคมี เรื่องอะตอมและธาตุ ของโรงเรียนวัดนวลนรดิศ</p>
          </div>
          <div className="flex space-x-8 text-xl">
            <div data-aos="fade-right"><Link className="text-lg text-white font-light w-40 h-12 flex items-center" href="/pages/about" >อ่านเพิ่มเติม</Link></div>
            <div data-aos="fade-left"><Link className="text-lg text-white font-light w-40 h-12 flex items-center" href="/pages/lesson" >เข้าสู่เนื้อหาหลัก</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
