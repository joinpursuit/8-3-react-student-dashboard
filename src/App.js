import React from "react";
import Data from "./data/data";

import StudentGallery from "./components/StudentGallery";
import CohortList from "./components/CohortList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allStudents: [...Data],
      cohortSemester: "All Students",
    };
  }

  handleClick = (date) => {
    const selectSemester = Data.filter(
      (student) =>
        student.cohort.cohortCode.replace(/\B(?=(\d{4})+(?!\d))/g, " ") === date //stackoverflow
    );
    this.setState({ allStudents: [...selectSemester] });
    this.setState({ cohortSemester: date });

    if (date === null) {
      this.setState({ allStudents: [...Data], cohortSemester: "All Students" });
    }
  };

  render() {
    const { allStudents, cohortSemester } = this.state;

    return (
      <section className="Dashboard">
        <div className="h1">
          <h1>Student Dashboard</h1>
        </div>
        <div className="leftSide">
          <CohortList Data={Data} handleClick={this.handleClick} />
        </div>
        <div className="rightSide">
          <StudentGallery Data={allStudents} cohortSemester={cohortSemester} />
        </div>
      </section>
    );
  }
}

export default App;
