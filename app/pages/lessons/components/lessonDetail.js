import { lessonDetails } from "@/app/data/lessons-data"

export default function LessonDetail(props) {
    const { setLessonDetailElement, lessonIndex, id, title } = props

    const lessonDetailElement = lessonDetails[lessonIndex].details.map((detail, index) => {
        return <li key={index} className="text-md">{detail}</li>
    }) 

    return (
        <div className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-[5px] z-[1000] w-full h-[100vh]" onClick={() => {setLessonDetailElement(null)}}>
            <div className="w-[200px]">
                <div className="w-full bg-gray-900 rounded-t-md py-[12px] ">
                    <h1 className="text-center text-[15px] font-medium">หน่วยที่ {id} : {title}</h1>
                </div>
                <ol className="flex flex-col bg-gray-800 rounded-b-md">
                    <h1 className="text-[13px] mt-2 mx-6">รายการเนื้อหา</h1>
                    <ol className="space-y-2 py-[16px] px-[35px] list-disc text-[8px]">
                        {lessonDetailElement}   
                    </ol>
                </ol>
            </div>
        </div>
    )
}