
import { NavLink } from "react-router-dom";
import { Contact, File, HomeIcon, PersonStanding, ProjectorIcon, TrendingUpIcon } from "lucide-react";




const menuItemData = [
    {icon: <HomeIcon className="w-5 h-5"/>, name: 'Home', url: '/home'},
    {icon: <PersonStanding className="w-5 h-5"/>, name: 'About', url: '/about'},
    {icon: <TrendingUpIcon className="w-5 h-5"/>, name: 'Experience', url: '/experience'},
    {icon: <File className="w-5 h-5"/>, name: 'Resume', url: '/resume'},
    {icon: <Contact className="w-5 h-5"/>, name: 'Contacts', url: '/contacts'},
];

const SideBar = () => {

    return (<div className="col-12 d-flex flex-column gap-2 py-3 layout-side-bar">
        {
            menuItemData.map((item, index) => {

                return (<NavLink 
                    key={index} 
                    to={item.url}
                    className={({isActive}) => `d-flex flex-row gap-2 justify-content-start align-items-center layout-side-bar-item  col-12 px-1 py-2 ${
                      isActive
                        ? 'layout-nav-selected-tab'
                        : 'layout-nav-not-selected-tab'
                    }`}
                >
                    <span >{item.icon}</span>
                    <span className="text-large text-start">{item.name}</span>
                </NavLink>);
            })
        }
    </div>);
};

export default SideBar;