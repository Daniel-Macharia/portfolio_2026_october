import { BookOpenCheckIcon, MenuSquareIcon } from "lucide-react";
import { useEffect, useState } from "react";
import MoreDetails from "./MoreDetails";
import MobileTopBarMoreModal from "./MobileTopBarMoreModal";
import MobileSideBar from "./MobileSideBar";


const MobileNavBar = () => {

    const [showMoreDetails, setShowMoreDetails] = useState(false);

    const [showMobileMenus, setShowMobileMenus] = useState(false);

    useEffect(() => {
        (async () => {
            if(showMoreDetails)
            {
                setShowMobileMenus(false);
            }
        })();
    }, [showMoreDetails]);

    useEffect(() => {
        (async () => {
            if(showMobileMenus)
            {
                setShowMoreDetails(false);
            }
        })();
    }, [showMobileMenus]);

    return (<div className='col-12 position-relative m-0'>
    <div className="col-12 d-flex flex-row layout-top-bar">
        <div className="col-2 d-flex flex-row justify-content-start align-items-center">
            <button
            className="btn btn-outline-secondary"
            onClick={() => setShowMobileMenus(!showMobileMenus)}
            >
                <MenuSquareIcon className="w-6 h-6" />
            </button>
        </div>
        <div className='col-8 d-flex flex-row justify-content-center align-items-center gap-2'>
            <BookOpenCheckIcon className="w-5 h-5" />
            <p className="text-center text-larger m-0">
                My Portfolio
            </p>
        </div>
        <div className='col-2 d-flex flex-row justify-content-end align-items-center gap-2'>
            <MoreDetails showMoreDetails={showMoreDetails} setShowMoreDetails={setShowMoreDetails} />
        </div>
    </div>
    {showMoreDetails && <MobileTopBarMoreModal show={showMoreDetails} setShow={setShowMoreDetails} />}
    {showMobileMenus && <MobileSideBar show={showMobileMenus} setShow={setShowMobileMenus} />}
    </div>);
};

export default MobileNavBar;