import { useEffect, useState } from "react";

import "./ExperiencePage.css";
import SkillsComponent from "../SkillsComponent";



const ExperiencePage = () => {

    const [selectedTab, setSelectedTab] = useState("SKILLS");

    useEffect( () => {
        ( async () => {
            setSelectedTab("SKILLS");
        } )();
    }, []);

    const renderSkillsTab = () => {

        return (<div className="col-12 card p-3">
            <SkillsComponent />
        </div>);
    };

    const renderSampleWorkTab = () => {

        return (<div className="col-12 card p-3">
            <h1>Oops! No projects uploaded</h1>
            <p>most of my work has been private hence not disclosed here.</p>
        </div>);
    };


    return (<div className="col-12 p-3">
        <div className="col-12 d-flex flex-row justify-content-start align-items-center gap-3 p-3">
            <button className={`col-4 col-md-3 experience-tab p-3 ${selectedTab === "SKILLS" ? "selected-tab" : "non-selected-tab"}`}
            onClick={() => {setSelectedTab("SKILLS")}}
            >
                Skills
            </button>
            <button className={`col-4 col-md-3 experience-tab p-3 ${selectedTab === "SAMPLE_WORK" ? "selected-tab" : "non-selected-tab"}`}
            onClick={() => {setSelectedTab("SAMPLE_WORK")}}
            >
                Sample Work
            </button>
        </div>

        <div className="col-12 d-flex flex-row justify-content-start align-items-center gap-3 p-3">
            {(selectedTab === "SKILLS") && renderSkillsTab()}
            {(selectedTab === "SAMPLE_WORK") && renderSampleWorkTab()}
        </div>
    </div>);
};

export default ExperiencePage;