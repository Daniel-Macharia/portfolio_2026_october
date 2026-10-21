
import { BookOpenCheckIcon } from 'lucide-react';
import ThemeToggle from '../theme/ThemeToggle';
import MoreDetails from "./MoreDetails";
import { useState } from 'react';
import TopBarMoreModal from './TopBarMoreModal';



const TopBar = () => {

    const [showMoreDetails, setShowMoreDetails] = useState(false);

    return (<span className='position-relative'>
        <div className="col-12 d-flex flex-row layout-top-bar">
        <div className='col-6 d-flex flex-row justify-content-start align-items-center gap-2'>
            <BookOpenCheckIcon className="w-5 h-5" />
            <p className="text-center text-larger m-0">
                My Portfolio
            </p>
        </div>
        <div className='col-6 d-flex flex-row justify-content-end align-items-center gap-2'>
            <ThemeToggle />
            <MoreDetails showMoreDetails={showMoreDetails} setShowMoreDetails={setShowMoreDetails} />
        </div>
    </div>
    {showMoreDetails && <TopBarMoreModal show={showMoreDetails} setShow={setShowMoreDetails} />}
    </span>);
};

export default TopBar;