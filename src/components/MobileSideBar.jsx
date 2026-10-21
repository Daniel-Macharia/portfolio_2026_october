import { X } from "lucide-react";
import TopSideBar from "./TopSideBar";
import SideBar from "./SideBar";


const MobileSideBar = ({show, setShow}) => {

    const loadPreviousVersion = () => {
        //load previous portfolio version
    };

    const loadNextVersion = () => {
        //load previous portfolio version
    };


    const renderModalBody = () => {

        return (<div className="col-12 d-flex flex-column align-items-start gap-2">
            <button 
            onClick={() => {
                loadPreviousVersion();
            }}
            className="layout-topbar-more-modal-item py-1 col-12 text-start layout-btn-color"
            >
                previous version
            </button>

            <button 
            onClick={() => {
                loadNextVersion();
            }}
            className="layout-topbar-more-modal-item py-1 col-12 text-start layout-btn-color"
            >
                next version
            </button>
        </div>);
    };


    return (
    <div className="layout-mobile-sidebar-more-modal m-0 px-0 py-2 col-10 col-sm-8 col-md-4 position-absolute top-0 start-90 d-flex flex-column gap-2"
    >
        <div className="col-12 d-flex flex-row pe-2 align-items-center">
            <div className="col-11">
                <TopSideBar />
            </div>
            <div className="col-1 pe-1 d-flex flex-row align-items-center">
                <button 
                onClick={() => {
                    setShow(false);
                }}
                className="close-layout-topbar-more-modal layout-btn-color"
                >
                    <X className="w-6 h-6"/>
                </button>
            </div>
        </div>
        <div className="col-12">
            <SideBar />
        </div>
    </div>);
};

export default MobileSideBar;