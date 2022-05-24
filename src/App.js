import React from "react";
import Students from "./Components/Students";
import Cohorts from "./Components/Cohorts";
import StudentsByCohort from "./Components/StudentsByCohort";
import StudentsData from "./data/data.json";
import "./App.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      students: StudentsData,
      cohorts: StudentsData,
      filter: '*',
      isVisible: false,
    }
  }

  /**
   * filterlStudents: Filter students by cohort
   * @param {String} cohort -A cohort identifier.
   * @returns update the students state object with students filtered
   */
  filterlStudents = (cohort) => {
    const filtered = this.state.students.filter(e => e.cohort.cohortCode === cohort)
    this.setState({ 
      students: filtered,
      filter: cohort,
    });  
  }

  /**
   * getCohort: get the student cohort code which was selected by means of <Cohorts /> in order to update the sudent list.
   * @param {String} cohort -A cohort identifier.
   * @returns update the students list by cohort
   */
  getCohort = (cohort) => {
    if(cohort !== '*') {
      this.setState({ 
        students: StudentsData,
      }, () => this.filterlStudents(cohort));
    } else {
      this.setState({ 
        students: StudentsData,
        filter: '*',
      });
    }
  }

  render(){
    return (
      <>
        <header><h1>Student Dashboard</h1></header>
        <main>
          <aside>
            <Cohorts cohorts={this.state.cohorts} getCohort={this.getCohort}/>
          </aside>
          <article>
            <StudentsByCohort students={this.state.students} filter={this.state.filter}/>
            <Students students={this.state.students}/>
          </article>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;