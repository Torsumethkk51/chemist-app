import Image from "next/image";
import { Link } from "react-scroll";

export default function TechnologyItem(props, index) {
    const { thumbnailImg } = props

    return (
        <div className="w-[175px] mobile-m:w-[220px] mobile-l:w-[265px] tablet:w-[512px] laptop:w-[700px] laptop-l:w-[300px] h-[auto] mt-8 flex flex-col items-center space-y-4 tablet:space-y-[50px] laptop-l:space-y-[70px]">
            <div className="flex justify-center items-center w-[75px] h-[75px] tablet:w-[125px] tablet:h-[125px] p-2 bg-white/35 rounded-full">
                <Image src={thumbnailImg.url} width={thumbnailImg.width} height={thumbnailImg.height} alt={thumbnailImg.title} className="w-auto h-auto" />
            </div>
            <h1 className="font-medium text-[10px] tablet:text-[25px] laptop-l:text-[35px]">
                {thumbnailImg.title}
            </h1>
            <p className="w-[150px] tablet:w-[300px] h-[35px] text-[8px] tablet:text-[13px] laptop-l:text-[20px] font-light space-y-2 text-center">
                {thumbnailImg.description}
            </p>
            <a href={thumbnailImg.link} className="bg-none border-white border-2 px-[5px] py-[1px] tablet:px-[16px] tablet:py-[8px] text-[8px] tablet:text-[16px] laptop-l:text-[20px] rounded-lg hover:bg-white hover:text-gray-800 duration-300 ease-in">
                อ่านเพิ่มเติม
            </a>
        </div>
    )
}