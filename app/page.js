'use client'
import { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import Aos from "aos";
import "aos/dist/aos.css"
import { TypeAnimation } from "react-type-animation";
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
        <AppHeader latestScroll={latestScroll}/>
        <VideoBg bgUrl={"/bgVideos/homeBg-sm.mp4"} />
        <div className="h-[100vh] flex flex-col justify-center items-center text-center">
          <div className="flex flex-col space-y-5">
            <TypeAnimation
              sequence={[
                'ยินดีต้อนรับสู่ ChemistryDocs!',
              ]}
              wrapper="p"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={0}
              className="font-medium text-[20px] mobile-m:text-[22px] mobile-l:text-[24px] tablet:text-[30px] laptop:text-[35px] laptop-l:text-[60px] "
            />
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
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              className="font-semibold text-[15px] mobile-m:text-[17px] mobile-l:text-[20px] tablet:text-[23px] laptop:text-[25px] laptop-l:text-[40px]"
            />
          </div>
          <div className="text-[9px] mobile-m:text-[10px] mobile-l:text-[10px] tablet:text-[14px] laptop:text-[14px] laptop-l:text-[18px] w-[200px] tablet:w-[350px] laptop:w-[400px] laptop-l:w-[500px] pb-5 pt-10 space-y-2" data-aos="zoom-in">
            <p>เว็บไซต์จัดเพื่อขึ้นเพื่อเป็นเว็บไซต์ เพื่อการศึกษาในรายวิชาเคมี เรื่องอะตอมและธาตุ และเว็บไซต์นี้เป็นส่วนหนึ่งใน โครงงานวิทยศาสตร์และเทคโนโลยี เรื่อง การจัดทำเว็บไซต์เพื่อการศึกษา ในรายวิชาเคมี เรื่องอะตอมและธาตุ ของโรงเรียนวัดนวลนรดิศ</p>
          </div>
        </div>
      </section>
    </div>
  );
}
