import History from "./History";
import Purpose from "./Purpose";
import Sidebar from "./Sidebar";
import Technology from "./Technology";

export default function Content() {
    return (
        <div>
            <div className="max-w-[90%] mx-auto laptop-l:max-w-[90%] h-[95%] flex flex-col relative top-[70px] space-x-[10px]">
                <Sidebar />
                <div className="w-full mobile-m:w-full mobile-l:w-full tablet:w-[600px] laptop:w-[800px] laptop-l:w-[1120px] tablet:absolute tablet:left-[25%]  laptop:absolute laptop:left-[25%] laptop-l:absolute laptop-l:left-[25%] space-y-[10px]">
                    <History />
                    <Purpose />
                    <Technology />
                </div>
            </div>
        </div>
    )
}