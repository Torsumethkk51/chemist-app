'use client'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function ContactItem(props) {
    const { member } = props

    return (
        <div className="w-[400px] h-[550px] bg-black/50 rounded-lg">
            <h1 className="text-3xl font-semibold text-center pt-6">สมาชิก {member.id}</h1>
            <Image src={member.imageUrl} width={200} height={200} alt={member.name} priority className="w-auto h-auto rounded-full mx-auto mt-4" />
            <div className="text-center mt-4">
                <TypeAnimation
                    sequence={[
                        'ชื่อ : ' + member.name,
                    ]}
                    wrapper="p"
                    speed={50}
                    style={{ fontSize: '1.5em', display: 'inline-block' }}
                    repeat={0}
                    className="font-semibold"
                />
            </div>
            <div className="px-12 mt-4">
                <p><span className="font-medium">ตำแหน่ง / หน้าที่ : </span>{member.role}</p>
                <p><span className="font-medium">รายละเอียด : </span>{member.moreRole}</p>
                <p><span className="font-medium">ช่องทางการติดต่อ : </span><a href={member.contact}>Github</a></p>
            </div>
        </div>
    )
}