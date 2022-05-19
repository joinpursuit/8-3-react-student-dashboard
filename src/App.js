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
    };
  }
  filteredByClass = (date) => {
    const selectedClass = studentData.filter(
      (student) => student.cohort.cohortCode === date
    );
    this.setState({
      filteredStudents: [...selectedClass],
    });
    if (date === null) {
      this.setState({
        filteredStudents: [...studentData],
      });
    }
  };
  render() {
    const { filteredStudents } = this.state;
    return (
      <div className="main">
        <h1 className="heading">Student Dashboard</h1>

        <Sidebar filteredByClass={this.filteredByClass} />

        <div classname="gallery">
          <StudentGallery filteredStudents={filteredStudents} />
        </div>
      </div>
    );
  }
}

export default App;
