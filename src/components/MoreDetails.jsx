import { MoreVertical } from "lucide-react";


const MoreDetails = ({showMoreDetails, setShowMoreDetails}) => {

    return (
        <button
    className="btn btn-outline-secondary"
    onClick={() => setShowMoreDetails(!showMoreDetails)}
    >
        <MoreVertical className="w-5 h-5" />
    </button>);
};

export default MoreDetails;