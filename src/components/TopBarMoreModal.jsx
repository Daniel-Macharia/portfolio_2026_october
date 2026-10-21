
import { X } from "lucide-react";



const TopBarMoreModal = ({show, setShow}) => {

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
    <div className="layout-topbar-more-modal px-2 py-2 col-8 col-sm-6 col-md-4 position-absolute top-100 end-0 d-flex flex-column gap-2"
    >
        <div className="col-12 d-flex flex-row justify-content-end">
            <button 
            onClick={() => {
                setShow(false);
            }}
            className="close-layout-topbar-more-modal layout-btn-color"
            >
                <X className="w-6 h-6"/>
            </button>
        </div>

      <div className="col-12">
        {renderModalBody()}
      </div>
    </div>);
};

export default TopBarMoreModal;