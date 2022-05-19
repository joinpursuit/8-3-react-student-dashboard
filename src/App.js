
import React from "react";


class App extends React.Component {
  constructor(){
    this.state= {
      selectedCohortCode: "All Students"
    }
  }

  handleClick(clickedItem) {
    this.setState({selectedCohortCode: clickedItem})
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
