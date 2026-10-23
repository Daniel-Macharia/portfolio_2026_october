const ResumePage = () => {

    return (<div className="col-12 p-3 d-flex flex-column flex-md-row gap-3">
        <div className="p-3 d-flex flex-column col-12 col-md-8 card">
            <h3 className="text-start">
                <u>
                    Experience
                </u>
            </h3>
            <div className="col-12 d-flex flex-column gap-3">
                <div className="col-12 text-start card p-3">
                    <h4 className="m-0">
                        January 2026 to date
                    </h4>
                    <p className="m-0">
                        <b>
                            Fullstack developer at Optimum ERP Systems.
                        </b>
                    </p>
                    <p className="m-0">
                        Developed a data analysis and visualization tool named <b>tvet360</b>. It is a 
                        data warehouse for TVET institutions, including reports on student 
                        enrollment, reporting and fee payments, providing information by roles 
                        and drill-down for details upto the ward level. 
                        <br/>
                        Student portal installation, setup and testing for TVETs. 
                    </p>
                </div>

                <div className="col-12 text-start card p-3">
                    <h4 className="m-0">
                        August 2026
                    </h4>
                    <p className="m-0">
                        <b>
                            Backend Developer consultant for TRC Systems.
                        </b>
                    </p>
                    <p className="m-0">
                        Design and implementation of an m-pesa payment gateway. Includes 
                        stk push to clients and capture of payment notifications. 
                    </p>
                </div>

                <div className="col-12 text-start card p-3">
                    <h4 className="m-0">
                        February 2026 to August 2026 
                    </h4>
                    <p className="m-0">
                        <b>
                            Learning Artificial Intelligence.
                        </b>
                    </p>
                    <p className="m-0">
                        Learning Artificial Intelligence. Have covered Search, Knowledge 
                        Representation, Uncertainty, Optimization, Machine Learning & Neural 
                        Networks and Natural Language Processing. 
                    </p>
                </div>

                <div className="col-12 text-start card p-3">
                    <h4 className="m-0">
                        September 2025 to December 2025 
                    </h4>
                    <p className="m-0">
                        <b>
                            Software Development Internship at Compulynx Limited. 
                        </b>
                    </p>
                    <p className="m-0">
                        Created a solution named <b>Janitor</b> for primebank. It helps in removing 
                        duplicate eslips that appear in a payment gateway due to a design 
                        shortcoming that failed to ensure indempotency of the eslips. 
                        Customized a visitor management software <b>(VOWEL)</b> for a new client.  
                        Fixed a Zero-day bug that prevented visitors to download their visiting tickets 
                        as QR codes. 
                        Worked in a team of three to successfully upgrade the itax payment gateway 
                        legacy system from spring 3 to spring 6. 
                    </p>
                </div>

                <div className="col-12 text-start card p-3">
                    <h4 className="m-0">
                        May 2025 – August 2025 
                    </h4>
                    <p className="m-0">
                        <b>
                            Front-end developer internship at Crowbyte.  
                        </b>
                    </p>
                    <p className="m-0">
                        Participated in a team of three in developing the user interface of a project 
                        named shambabot. 
                    </p>
                </div>

                <div className="col-12 text-start card p-3">
                    <h4 className="m-0">
                        May 2025 – June 2025
                    </h4>
                    <p className="m-0">
                        <b>
                            Junior Developer internship at TRC Systems.
                        </b>
                    </p>
                    <p className="m-0">
                        Participated in a team of three in developing a leads collection service for a 
                        petrol station. 
                        Created the mobile counter-part to collect and send the leads data to the 
                        service.
                    </p>
                </div>
            </div>
        </div>

        <div className="p-3 d-flex flex-column col-12 col-md-4 card gap-3">
            <div className="col-12 card p-3">
                <h3 className="text-start">
                    <u>
                        Education
                    </u>
                </h3>
                <div className="col-12 d-flex flex-column gap-3">
                    <div className="col-12 text-start card p-3">
                        <h4 className="m-0">
                            September 2021 – April 2025
                        </h4>
                        <p className="m-0">
                            <b>
                                Bsc. Information Technology
                            </b>
                        </p>
                        <p className="m-0">
                            Masinde Muliro University of Science and Technology, Kakamega.
                        </p>
                    </div>

                    <div className="col-12 text-start card p-3">
                        <h4 className="m-0">
                            January 2017 – April 2021 
                        </h4>
                        <p className="m-0">
                            <b>
                                Kenya Certificate of Secondary Education 
                            </b>
                        </p>
                        <p className="m-0">
                            PCEA Mitahato Secondary School, Kiambu.
                        </p>
                    </div>
                </div>
            </div>

             <div className="col-12 card p-3">
                <h3 className="text-start">
                    <u>
                        Skills
                    </u>
                </h3>
                <div className="col-12 d-flex flex-column gap-3">
                    <ul className="text-start">
                        <li>
                            System Analysis and Design
                        </li>
                        <li>
                            Relational Database design and Implementation in SQL 
                        </li>
                        <li>
                            Backend development using Java – Spring with thymeleaf, and springboot. 
                        </li>
                        <li>
                            Restful APIs and token based Authentication.
                        </li>
                        <li>
                            Frontend development: React/angular with bootstrap/tailwind. 
                        </li>
                        <li>
                            Git and Github.
                        </li>
                        <li>
                            Software Documentation
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-12 card p-3">
                <h3 className="text-start">
                    <u>
                        Contacts
                    </u>
                </h3>
                <div className="col-12 d-flex flex-column gap-3">
                    <p className="text-start m-0">
                        Phone: +254712696965 
                    </p>
                    <p className="text-start m-0">
                        Email: ndungudanny444@gmail.com   
                    </p>
                    <p className="text-start m-0">
                        Github: https://github.com/Daniel-Macharia
                    </p>
                </div>
            </div>
        </div>
    </div>);
};

export default ResumePage;