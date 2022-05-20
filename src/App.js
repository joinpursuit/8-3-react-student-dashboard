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
      studentShowDetail: [],
    };
  }

  selectCohortHandler = (selectedCohort) => {
    this.setState({
      selectedCohort: selectedCohort,
      studentShowDetail: [],
    });
  };

  studentShowDetailHandler = (studentId) => {
    let copyOfStudentShowDetail = [...this.state.studentShowDetail];
    copyOfStudentShowDetail.includes(studentId)
      ? copyOfStudentShowDetail.splice(
          copyOfStudentShowDetail.indexOf(studentId),
          1
        )
      : copyOfStudentShowDetail.push(studentId);

    this.setState({
      studentShowDetail: copyOfStudentShowDetail,
    });
  };

  render() {
    //console.log(this.state);
    const { selectedCohort } = this.state;
    return (
      <div className="dashBoard">
        <Nav />
        <CohortList
          data={Data}
          selectCohortHandler={this.selectCohortHandler}
        />
        <StudentList
          data={Data}
          selectedCohort={selectedCohort}
          studentShowDetail={this.state.studentShowDetail}
          studentShowDetailHandler={this.studentShowDetailHandler}
        />
      </div>
    );
  }
}

export default App;
