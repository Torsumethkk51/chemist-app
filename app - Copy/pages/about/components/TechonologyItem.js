import Image from "next/image";
import { Link } from "react-scroll";

export default function TechnologyItem(props, index) {
    const {thumbnailImg} = props

    return (
        <div className="w-[25%] h-[auto] flex flex-col items-center space-y-5">
            <div className="flex justify-center items-center w-[150px] h-[150px] p-2 bg-white/35 rounded-full">
                <Image src={thumbnailImg.url} width={thumbnailImg.width} height={thumbnailImg.height} alt={thumbnailImg.title} className="w-auto h-auto"/>
            </div>
            <h1 className="font-medium text-2xl">
                {thumbnailImg.title}
            </h1>
            <p className="h-[100px]">
                {thumbnailImg.description}
            </p>
            <a href={thumbnailImg.link} className="bg-none border-white border-2 px-10 py-3 text-xl rounded-lg hover:bg-white hover:text-gray-800 duration-300 ease-in">
                More
            </a>
        </div>
    )
}