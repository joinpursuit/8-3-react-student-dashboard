import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Landing.scss";

const Landing = () => {
  return (
    <section className="landingPage">
      <h1 id="landingPageTitle">
        <div className="letterOne letter">S</div>
        <div className="letterTwo letter">t</div>
        <div className="letterThree letter">u</div>
        <div className="letterFour letter">d</div>
        <div className="letterFive letter">e</div>
        <div className="letterSix letter">n</div>
        <div className="letterSeven letter">t</div>
        <div className="letterEight letter">D</div>
        <div className="letterNine letter">a</div>
        <div className="letterTen letter">s</div>
        <div className="letterEleven letter">h</div>
        <div className="letterTwelve letter">b</div>
        <div className="letterThirteen letter">o</div>
        <div className="letterFourteen letter">a</div>
        <div className="letterFifteen letter">r</div>
        <div className="letterSixteen letter">d</div>
      </h1>
      <div id="landingPageButton">
        <Link to="/studentDashboard" id="enterButton">
          <Button id="buttonText">ENTER</Button>
        </Link>
      </div>
    </section>
  );
};
export default Landing;
