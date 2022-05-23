import React from "react";
import Header from "./Components/Header";
import CohortList from "./Components/CohortList";
import StudentList from "./Components/StudentList";
import data from "./data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: data,
      selectedCohortCode: "All Students",
      comments: {},
    };
  }

  handleSemesterItemClick = (semester) => {
    let selectedCohortList = data.filter(
      (students) => students.cohort.cohortCode === semester
    );

    this.setState({
      studentData: selectedCohortList,
      selectedCohortCode: semester,
    });

    if (semester === null) {
      this.setState({
        selectedCohortCode: "All Students",
        studentData: data,
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <CohortList
            studentInformation={this.state.studentData}
            handleSemesterItemClick={this.handleSemesterItemClick}
          />
          <StudentList
            studentInformation={this.state.studentData}
            selectedCohortCode={this.state.selectedCohortCode}
          />
        </div>
      </div>
    );
  }
}
export default App;
