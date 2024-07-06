import History from "./History";
import Purpose from "./Purpose";
import Sidebar from "./Sidebar";
import Technology from "./Technology";

export default function Content() {
    return (
        <div>
            <div className="w-[80%] h-[95%] flex relative top-[70px] space-x-[10px]">
                <Sidebar />
                <div className="w-[250px] mobile-m:w-[295px] mobile-l:w-[330px] tablet:w-[600px] laptop:w-[800px] laptop-l:w-[1120px] absolute left-[25%] space-y-[10px]">
                    <History />
                    <Purpose />
                    <Technology />
                </div>
            </div>
        </div>
    )
}