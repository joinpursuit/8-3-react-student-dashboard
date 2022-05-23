
import React from "react";
import StudentList from "./components/StudentList";
import CohortList from "./components/CohortList";
import Data from "./data/data.json"

class App extends React.Component {
  constructor(){
    this.state= {
      selectedCohortCode: "All Students",
      deets: [],
      comments: {}
    }
  }

  selectCohort = (selectedCohort) => {
    this.setState({
      selectedCohort: selectedCohort,
      deets: [],
    })
  }

  showDeets = (studentId) => {
    let copyOfDeets = [...this.state.deets];
    copyOfDeets.includes(studentId) ? copyOfDeets.splice(copyOfDeets.indexOf(studentId), 1) 
    : copyOfDeets.push(studentId);
    this.setState({deets: copyOfDeets,})
  }

  handleClick(clickedItem) {
    this.setState({selectedCohortCode: clickedItem})
  }

  commentStuff = (studentId, author, comment) => {
    if(comment !== "" && author !== ""){
      let record = `[${author}] said: "${comment}"`;
      let copyOfComments = this.state.comments;
      if (copyOfComments.hasOwnProperty(studentId)) {
        copyOfComments[studentId].push(record);
      } else {
        copyOfComments[studentId] = [record];
      }
      this.setState({comments: copyOfComments,})
    }

  }

  render() {
    const cohorts = new Set(data.map((item) => item.cohort.cohortCode));
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList garysCustomClickHandler={()=> this.handleClick()} cohorts={cohorts} />
      <StudentList students={students} />
    </div>
  )
  }
}


export default App;
