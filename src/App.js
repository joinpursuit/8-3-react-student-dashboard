import React from "react";
import "./App.css";
import data from "./data/data";
import ClassSection from "./ClassSection";
import StudentDashboard from "./StudentDashboard";

class App extends React.Component {
  constructor() {
    super();
    this.pickCohort();
    this.state = {
      classCode: "All Classes",
      currentCohort: data,
      comments: {},
      buttonClicked: 0,
    };
  }

  pickCohort = (code, array) => {
    const newArray =
      !code || code === "All Classes"
        ? array
        : array.filter((element) => {
            return element.cohort.cohortCode === code;
          });

    this.setState({
      classCode: code,
      currentCohort: newArray,
    });
  };

  addComments = (commenterName, comment) => {
    const newCommentObj = {};

    newCommentObj[commenterName] = ` says: ${comment}`;

    this.setState({
      comments: newCommentObj,
    });
  };

  changeTheme = (buttonClicked) => {
    if (buttonClicked === 0 || buttonClicked % 3 === 0) {
      return "Default";
    } else if (buttonClicked % 2 === 0) {
      return "Night-Theme";
    } else {
      return "Rose-Gold";
    }
  };

  handleThemeButton = (event, buttonClicked) => {
    event.preventDefault();
    this.setState({
      buttonClicked: (buttonClicked += 1),
    });
    this.changeTheme(buttonClicked);
  };

  render() {
    const cohorts = data.map((element) => {
      return element.cohort.cohortCode;
    });

    return (
      <div className={this.changeTheme(this.state.buttonClicked)}>
        <header>
          <h1>Student Dashboard</h1>
          <button
            className="fun"
            onClick={(event) => {
              this.handleThemeButton(event, this.state.buttonClicked);
            }}
          >
            Change Theme
          </button>
        </header>
        <section className="main-section">
          <div className="left-side">
            <ClassSection
              studentArray={data}
              classListArray={cohorts}
              handleClick={this.pickCohort}
            />
          </div>
          <div className="right-side">
            <StudentDashboard
              array={this.state.currentCohort}
              cohort={this.state.classCode}
              handleComments={this.addComments}
              commentsObj={this.state.comments}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
