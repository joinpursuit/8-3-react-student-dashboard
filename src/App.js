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
    if (commenterName in Object.keys(newCommentObj)) {
      newCommentObj[commenterName].push(comment);
    } else {
      newCommentObj[commenterName] = ` says: ${comment}`;
    }

    this.setState({
      comments: newCommentObj,
    });
  };

  render() {
    const cohorts = data.map((element) => {
      return element.cohort.cohortCode;
    });

    return (
      <div>
        <header>
          <h1>Student Dashboard</h1>
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
