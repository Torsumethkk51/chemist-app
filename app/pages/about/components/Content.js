import History from "./History";
import Purpose from "./Purpose";
import Sidebar from "./Sidebar";
import Technology from "./Technology";

export default function Content() {
    return (
        <div>
            <div className="w-[100%] h-[95%] flex relative top-[70px]">
                <Sidebar />
                <div className="w-[80%] absolute left-[25%]">
                    <History />
                    <Purpose />
                    <Technology />
                </div>
            </div>
        </div>
    )
}