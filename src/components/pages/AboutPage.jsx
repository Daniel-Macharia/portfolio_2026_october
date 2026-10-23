const AboutPage = () => {

    return (<div className="col-12 h-100 p-3 d-flex flex-column justify-content-center align-items-center gap-3">
        <div className="text-center card p-3 col-12">
            <h2>Who am I ?</h2>
            <div className="d-flex flex-column gap-3 col-12">
                <div className="p-0 col-12">
                    <p className="">
                        I'm a <b>Software Engineer</b> and an aspiring <b>Artificial Intelligence</b> scientist.
                    </p>
                </div>
                <div className="card p-3 col-12">
                    <p className="">
                        Having graduated in December 2025 with a Bachelors degree in <b>Information Technology</b> 
                        <br/>
                        from <b>Masinde Muliro University of Science and Technology</b>,
                        <br/>
                        I look forward to begin my masters in Artificial Intelligence next month, November 2026.
                    </p>
                </div>
            </div>
        </div>
        <div className="text-center shadow-sm card p-3 col-12">
            <h2>Professional Journey.</h2>
            <div className="d-flex flex-column gap-3 col-12">
                <p>
                Currently, I work as a <b>web developer</b>, using <b>Java-springboot</b> and <b>react Javascript</b>.
                </p>
                <div className="card p-3 col-12">
                    <p className="">
                        My professional journey began with an online internship at <b>TRC Systems</b> where I learnt backend development using <b>springboot</b>.
                        The internship ran for two months, May and June 2025.
                        This gave me experience in API development including: using hibernate JPA to query the database, API security using jason web tokens, 
                        separation of functional features into separate modules and implementing the modules in three layers: model i.e the data access layer, view i.e the controllers or API endpoints and  control i.e the services implementing the application logic.
                        Though the internship lasted only two months, it gave me quite a good foundation on springboot.
                    </p>
                </div>
                <div className="card p-3 col-12">
                    <p className="">
                        I had a second parallel virtual internship from May to August 2025 at <b>Crowbyte</b>.
                        This gave me extensive knowledge and experience in frontend development using <b>React Javascript</b> and <b>Bootstrap CSS</b>
                    </p>
                </div>
                <div className="card p-3 col-12">
                    <p className="">
                        From September to December 2025, I worked as a developer intern at <b>Compulynx</b>.
                        Our first task being to upgrade a <b>spring 3</b> application to <b>spring 6</b>, I had to gain deep knowledge of spring core, including it's legacy tiles library and the modern viable replacement for tiles in spring 6.
                        This gave me deeper knowledge on spring core and springboot. I learnt how to write native queries via hibernate's entity manager, allowing more customization of complex queries. 
                        It also gave me knowledge of <b>Thymeleaf</b> as we re-wrote all the tiles templates in the modern html-like syntax of <b>Thymeleaf</b>.
                        <br/>
                        We were later assigned a visitor management system customization for a client.
                        This gave me knowledge on spring profiles for different environments e.g development and production environments, and how to manage log files using the logback-spring.xml file - allowing rolling logs.
                        I also took a deeper, practical dive into frontend development using <b>Angular Javascript</b>. 
                        As part of the customization, I fixed several bugs on the mobile applications i.e a <b>flutter app</b> and a <b>java app</b> for the software.
                    </p>
                </div>
            </div>
        </div>
    </div>);
};

export default AboutPage;