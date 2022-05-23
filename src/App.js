import { Component } from "react";
import data from "./data/data.json";
import Header from "./components/header";
import StudentList from "./components/studentList";
import CohortList from "./components/cohortList";
import OneOnOne from "./components/oneOnOne";

class App extends Component {
  constructor() {
    super();
    this.state = { currentCohort: "All Students", currentStudents: data };
  }

  changeCohort = (params) => {
    this.setState({
      currentCohort: params,
      currentStudents: data.filter((student) => {
        return student.cohort.cohortCode === this.state.currentCohort;
      }),
    });
    if (this.state.currentCohort === "All Students") {
      this.setState({
        currentStudents: data,
      });
    }
  };
  render() {
    return (
      <div>
        <Header />
        <h1>All Students</h1>
        <CohortList click={this.changeCohort} />
        <StudentList array={this.state.currentStudents} />
        <OneOnOne />
      </div>
    );
  }
}

export default App;
