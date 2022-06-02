import React from "react";
import Cohort from "./Cohort";
import StudentList from "./StudentList";

class StudentGallery extends React.Component {
  render() {
    const { studentFilter, cohort } = this.props;
    const gallery = studentFilter.map((student, index) => {
      return <StudentList student={student} key={index} />;
    });
    return (
      <div>
        <Cohort studentFilter={studentFilter} cohort={cohort} />
        <div>{gallery}</div>
      </div>
    );
  }
}

export default StudentGallery;