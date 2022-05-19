import React from "react";
import Data from "./data/data.json";
import "./App.css";
import Nav from "./Components/Nav";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCohort: "AllStudents",
    };
  }

  selectCohortHandler = (selectedCohort) => {
    this.setState({
      selectedCohort: selectedCohort,
    });
  };

  render() {
    console.log(this.state);
    const { selectedCohort } = this.state;
    return (
      <div className="dashBoard">
        <Nav />
        <CohortList
          data={Data}
          selectCohortHandler={this.selectCohortHandler}
        />
        <StudentList data={Data} selectedCohort={selectedCohort} />
      </div>
    );
  }
}

export default App;
