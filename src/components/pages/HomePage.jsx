import "./HomePage.css";

const HomePage = () => {

    return (<div className="col-12 h-100 d-flex flex-column flex-md-row p-3 justify-content-center align-items-center gap-2">
        <span className="col-12 m-0 h-50 h-md-75 col-md-6 offset-0  d-flex flex-column justify-content-center align-items-center">
            <h3 className="m-0">
                Hello!
            </h3>
            <h4 className="m-0">
                I'm Daniel Macharia, it's a pleasure to meet you.
            </h4>

            <p className="m-0">
                I'm a <b>springboot/react</b> developer, <br/> passionate about <b>artificial intelligence</b>.
            </p>
        </span>

        <span className="col-12 m-0 h-50 h-md-75 col-md-6 offset-1 d-flex flex-row justify-content-center align-items-center">
            <img id="home-page-photo" src="/profile.jpg" />
        </span>
    </div>);
};

export default HomePage;