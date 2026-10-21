import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ResumePage from "./pages/ResumePage";
import ContactsPage from "./pages/ContactsPage";

const Content = () => {

    return (<>
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        </>
    );
};

export default Content;