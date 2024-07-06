'use client'
import dynamic from 'next/dynamic';

// Dynamic import for ReactPlayer
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function History() {
    return (
        <div className="w-[90%] h-[100%] bg-black/40 mb-5 rounded-lg space-y-8 px-8 py-5" id='history'>
            <h1 className="text-[15px] tablet:text-[25px] laptop-l:text-[45px] font-medium pt-6">ความเป็นมาของเว็บไซต์</h1>
            <div className="text-start text-[10px] tablet:text-[13px] laptop-l:text-[20px] font-light space-y-2">
                <p>เว็บไซต์นี้เป็นเว็บไซต์ที่เกิดขึ้นจากการ ทำโครงงานวิทยาศาสตร์ของโรงเรียนวัดนวลนรดิศ แต่ทางทีมผู้พัฒนานั้นอยู่แผนการเรียน</p>
                <p>วิทย์ คณิต คอมพิวเตอร์ เลยตัดสินใจทำเว็บไซต์นี้ขึ้นมาด้วยเหตุผลที่ว่า วิชาเคมีเป็นวิชาที่ยากสำหรับทางทีมผู้พัฒนา</p>
                <p>ทางทีมผู้พัฒนาเลยตัดสินใจทำเพราะมองเห็นว่าเป็นสิ่งที่ท้าทาย เลยตัดสินใจทำเว็บไซต์นี้ขึ้นมา</p>
            </div>
            <div className="flex flex-col items-center">
                <div>
                </div>
                <div className="font-light text-center my-[-5px] space-y-2 flex flex-col items-center">
                    <ReactPlayer url='/videos/aboutVideo1.mp4' controls={true} width="200px" height="150px" className="laptop:w-[500px]"/>
                    <p className='text-[7px] w-[120px] laptop-l:w-[500px] laptop-l:text-[18px]'>ขอขอบคุณคลิปวิดีโอ What Is Chemistry? จากแชแนล Free Animated Education : </p>
                    <a href="https://youtu.be/t8x3wdXZGEY?si=tzp29oP9G1tA3T_5" className='text-[7px] laptop-l:text-[18px]'>https://youtu.be/t8x3wdXZGEY?si=tzp29oP9G1tA3T_5</a>
                </div>
            </div>
        </div>
    )
}
