'use client'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function ContactItem(props) {
    const { member } = props

    return (
        <div className="w-[300px] laptop-l:w-[400px] h-[120px] laptop-l:h-[500px] bg-black/50 rounded-lg flex flex-col">
            <h1 className="text-[18px] laptop-l:text-3xl font-semibold text-left laptop-l:text-center pl-[25px] pt-2">สมาชิก {member.id}</h1>
            <div className="flex laptop-l:flex-col">
                <div className="mx-auto ml-[25px] mt-4 laptop-l:max-w-[250px] laptop-l:mx-auto">
                    <Image src={member.imageUrl} width={120} height={120} alt={member.name} priority className="w-auto h-auto rounded-full" />
                </div>
                <div>
                    <div className="text-left laptop-l:text-center mt-[1px] laptop-l:mt-[15px] px-12 w-[230px] laptop-l:w-[420px]">
                        <TypeAnimation
                            sequence={[
                                'ชื่อ : ' + member.name,
                            ]}
                            wrapper="p"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={0}
                            className="font-semibold text-[10px] laptop-l:text-[23px]"
                        />
                    </div>
                    <div className="px-12 laptop:px-16 mt-[0px] laptop-l:mt-[15px] text-[7px] laptop-l:text-[15px]">
                        <p><span className="font-medium">ตำแหน่ง / หน้าที่ : </span>{member.role}</p>
                        <p><span className="font-medium">รายละเอียด : </span>{member.moreRole}</p>
                        <p><span className="font-medium">ช่องทางการติดต่อ : </span><a href={member.contact}>Github</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}