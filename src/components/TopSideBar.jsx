import { BookOpenCheckIcon } from "lucide-react";



const TopSideBar = () => {

    return (<div className="layout-top-bar d-flex flex-row gap-2 justify-content-start align-items-center">
        <div className="layout-top-bar-image-container">
            <img id="layout-top-bar-image" src="/profile.jpg" alt="icon"/>
            {/* <BookOpenCheckIcon className="w-5 h-5" /> */}
        </div>
        <p className="text-center text-larger m-0">
            Daniel Macharia
        </p>
    </div>);
};

export default TopSideBar;