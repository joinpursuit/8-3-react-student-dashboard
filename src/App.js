import React from "react";
import StudentGallery from "./components/StudentGallery";
import { studentData } from "./data/data.js"
import Nav from "./components/Nav"
import "./App.css"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      studentFilter: [...studentData], 
      cohort: "All Students",
    }
  }

  classFilter = (date) => {
    const classSelect = studentData.filter( (student) => student.cohort.cohortCode === date);
    const howMany = date === "AllStudents" ? [...studentData] : classSelect;
    this.setState({
      studentFilter: howMany,
      cohort: date,
    })
  };

  render() {
    const {studentFilter, cohort} = this.state;
    return (
      <div className="main">
        <h1 className="header"> Student BananaBoard</h1>
        <Nav classFilter={this.classFilter} />
        <div className="display">
          <StudentGallery studentFilter={studentFilter} cohort={cohort} />
        </div>
      </div>
    )
  }
}

export default App;
