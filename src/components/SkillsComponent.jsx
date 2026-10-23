

import "./SkillsComponent.css";

const SkillsComponent = () => {

    return (<div className="col-12 d-flex flex-column gap-3">

        <div className="col-12 d-flex flex-column card p-3">
            <h4 className="">Springboot</h4>
            <div className="col-12 d-flex flex-column flex-md-row gap-3">
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <img id="skill-image" className="col-10" src="/springboot_logo.png" alt="image" />
                </div>
                <div className="col-12 card col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <p className="">
                        Backend development using <b>Java Springboot</b>.
                    </p>
                    <p className="">
                        Api infrastructure design and implementation, api security and performance optimizations such as pagination, caching and SQL query optimization
                    </p>
                </div>
            </div>
        </div>

        <div className="col-12 d-flex flex-column card p-3">
            <h4 className="">React JS</h4>
            <div className="col-12 d-flex flex-column flex-md-row gap-3">
                <div className="col-12 card col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <p className="">
                        Frontend development using <b>React Javascript</b>.
                    </p>
                    <p className="">
                        User interface implementation using react. Responsive design resulting in mobile-first applications.
                    </p>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <img id="skill-image" className="col-10" src="reactjs.png" alt="image" />
                </div>
            </div>
        </div>

        <div className="col-12 d-flex flex-column card p-3">
            <h4 className="">Other Skills</h4>
            <div className="col-12 d-flex flex-column flex-md-row gap-3">
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <img id="skill-image" className="col-10" src="/other.jpg" alt="image" />
                </div>
                <div className="col-12 card p-3 col-md-6 d-flex flex-column justify-content-center align-items-center gap-3">
                    <div className="col-12 d-flex flex-column card">
                        <p className=" m-0">
                            <b>SQL</b>.
                        </p>
                        <p className="">
                            Relational database design and implementation using SQL.
                            <br/>
                            Query optimization for better performance.
                        </p>
                    </div>
                    <div className="col-12 d-flex flex-column card">
                        <p className="m-0">
                            Frontend development using <b>Angular Javascript</b>.
                        </p>
                        <p className="">
                            User interface implementation using Angular, with responsive design for mobile-first applications.
                        </p>
                    </div>
                    <div className="col-12 d-flex flex-column card">
                        <p className="m-0">
                            <b>Mobile development</b>.
                        </p>
                        <p className="">
                            Mobile application development using Java.
                        </p>
                    </div>
                    <div className="col-12 d-flex flex-column card">
                        <p className=" m-0">
                            <b>Bootstrap</b> and <b>Tailwind</b>.
                        </p>
                        <p className="">
                            Modern styling using bootstrap or tailwind for modern look and feel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default SkillsComponent;