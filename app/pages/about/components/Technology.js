import TechnologyItem from "./TechonologyItem";
import { techThumbnails } from "@/app/data/tech-thumbnail";

export default function Technology() {

    const technologyElements = techThumbnails.map((thumbnail, index) => {
        return <TechnologyItem key={index} thumbnailImg={thumbnail} />
    })

    return (
        <div className="w-[90%] h-[135vh] tablet:h-[225vh] laptop-l:h-[100vh] bg-black/40 mb-5 rounded-lg space-y-8 px-8 py-8" id="technology">
            <h1 className="text-[15px] tablet:text-[25px] laptop-l:text-[45px] font-medium pt-6">เทคโนโลยีที่ใช้</h1>
            <div className="flex flex-col laptop-l:flex-row laptop-l:space-x-4 max-h-[800px] my-auto">
                {technologyElements}
            </div>
        </div>
    )
}