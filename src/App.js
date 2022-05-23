import React from "react";
import Sidebar from "./Components/Sidebar";
import { studentData } from "./data/data.js";
import StudentGallery from "./Components/StudentGallery.js";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredStudents: [...studentData],
      cohort: "All Students",
    };
  }
  stringTransformer = (string) => {
    if (string === "All Students") {
      return "All Students";
    }
    const semesterArr = string.split("");
    const semesterEnd = semesterArr.splice(-4);
    return [...semesterArr, " ", ...semesterEnd].join("");
  };
  filteredByClass = (date) => {
    const selectedClass = studentData.filter(
      (student) => this.stringTransformer(student.cohort.cohortCode) === date
    );
    const allOrSome =
      date === "All Students" ? [...studentData] : selectedClass;
    this.setState({
      filteredStudents: allOrSome,
      cohort: date,
    });
  };
  render() {
    const { filteredStudents, cohort } = this.state;
    return (
      <div className="main">
        <h1 className="heading">Student Dashboard</h1>

        <Sidebar
          filteredByClass={this.filteredByClass}
          stringTransformer={this.stringTransformer}
        />

        <div className="gallery">
          <StudentGallery filteredStudents={filteredStudents} cohort={cohort} />
        </div>
      </div>
    );
  }
}

export default App;
