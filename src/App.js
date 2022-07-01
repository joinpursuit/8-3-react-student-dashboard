import { Component } from "react";
import Header from "./components/header";
import data from "./data/data.json";
import StudentList from "./components/studentList";
import CohortList from "./components/cohortList";
import oneOnOne from "./components/oneOnOne";

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
      <div id="main">
        <Header />
        <CohortList click={this.changeCohort} />
        <StudentList array={this.state.currentStudents} />
        <oneOnOne cohort={this.state.currentStudents} />
      </div>
    );
  }
}

export default App;
