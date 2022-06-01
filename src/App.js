
import React from "react";
import StudentList from "./components/StudentList";
import { studentData } from "./data/data.js"
import "./app.css"

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
  render()
}
