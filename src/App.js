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
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
