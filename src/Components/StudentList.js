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

  displayCohortStudents = (
    data,
    selectedCohort,
    studentShowDetail,
    studentShowDetailHandler
  ) => {
    const selectedStudents = this.selectedCohortStudent(data, selectedCohort);

    return selectedStudents.map((selectedStudent, index) => {
      return (
        <Student
          studentInfo={selectedStudent}
          key={index}
          studentShowDetail={studentShowDetail}
          studentShowDetailHandler={studentShowDetailHandler}
        />
      );
    });
  };

  parseCohort = (cohort) => {
    if (cohort === "AllStudents") return "All Students";
    return `${cohort.substring(0, cohort.length - 4)} ${cohort.substring(
      cohort.length - 4
    )}`;
  };

  render() {
    const {
      data,
      selectedCohort,
      studentShowDetail,
      studentShowDetailHandler,
    } = this.props;

    const studentCards = this.displayCohortStudents(
      data,
      selectedCohort,
      studentShowDetail,
      studentShowDetailHandler
    );

    return (
      <div className="studentList">
        <h2>{this.parseCohort(selectedCohort)}</h2>
        <h3>Total Students: {studentCards.length}</h3>
        {studentCards}
      </div>
    );
  }
}

export default StudentList;
