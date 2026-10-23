
import Content from './components/Content';
import MobileNavBar from './components/MobileNavBar';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import TopSideBar from './components/TopSideBar';
import './Layout.css';


const Layout = () => {

    return (<div className="row h-100 p-3">
        <div className='d-none d-md-block col-md-3 m-0'>
            <TopSideBar />
            <SideBar />
        </div>
        <div className='d-none d-md-block col-md-9 m-0'>
            <TopBar />
            <Content />
        </div>

        <div className='d-block d-md-none col-12 m-0 '>
            <MobileNavBar />
            <Content />
        </div>
    </div>);
};

export default Layout;