import React from "react";
import Student from "./Student";

class StudentList extends React.Component {
  selectedCohortStudent = (data, selectedCohort) => {
    if (selectedCohort === "AllStudents") {
      return data;
    } else {
      return data.filter((student) => {
        return student.cohort.cohortCode === selectedCohort;
      });
    }
  };

  displayCohortStudents = (data, selectedCohort) => {
    const selectedStudents = this.selectedCohortStudent(data, selectedCohort);

    return selectedStudents.map((selectedStudent) => {
      return <Student studentInfo={selectedStudent} />;
    });
  };

  render() {
    const { data, selectedCohort } = this.props;
    const studentCards = this.displayCohortStudents(data, selectedCohort);

    return (
      <div className="studentList">
        <h2>All Students</h2>
        <h3>Total Students: {studentCards.length}</h3>
        {studentCards}
      </div>
    );
  }
}

export default StudentList;
