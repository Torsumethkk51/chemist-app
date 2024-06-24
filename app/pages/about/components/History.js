'use client'
import dynamic from 'next/dynamic';

// Dynamic import for ReactPlayer
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function History() {
    return (
        <div className="w-[90%] h-[100%] bg-black/40 mb-5 rounded-lg space-y-8 px-8 py-8" id='history'>
            <h1 className="text-3xl font-medium pt-6">ความเป็นมาของเว็บไซต์</h1>
            <div className="text-start text-[18px] font-light space-y-2">
                <p>เว็บไซต์นี้เป็นเว็บไซต์ที่เกิดขึ้นจากการ ทำโครงงานวิทยาศาสตร์ของโรงเรียนวัดนวลนรดิศ แต่ทางทีมผู้พัฒนานั้นอยู่แผนการเรียน</p>
                <p>วิทย์ คณิต คอมพิวเตอร์ เลยตัดสินใจทำเว็บไซต์นี้ขึ้นมาด้วยเหตุผลที่ว่า วิชาเคมีเป็นวิชาที่ยากสำหรับทางทีมผู้พัฒนา</p>
                <p>ทางทีมผู้พัฒนาเลยตัดสินใจทำเพราะมองเห็นว่าเป็นสิ่งที่ท้าทาย เลยตัดสินใจทำเว็บไซต์นี้ขึ้นมา</p>
            </div>
            <div className="flex flex-col items-center">
                <div>
                </div>
                <div className="font-light text-center mt-6 space-y-2">
                    <ReactPlayer url='https://youtu.be/t8x3wdXZGEY?si=30i1QUqEY5EkwqNX' />
                    <p>ขอขอบคุณคลิปวิดีโอ What Is Chemistry? จากแชแนล Free Animated Education : </p>
                    <a href="https://youtu.be/t8x3wdXZGEY?si=tzp29oP9G1tA3T_5">https://youtu.be/t8x3wdXZGEY?si=tzp29oP9G1tA3T_5</a>
                </div>
            </div>
        </div>
    )
}
