import React from "react";
import CohortCounter from "./CohortCounter";
import StudentDirectory from "./StudentDirectory";

class StudentGallery extends React.Component {
  render() {
    const { filteredStudents, cohort } = this.props;
    const gallery = filteredStudents.map((student, index) => {
      return <StudentDirectory student={student} key={index} />;
    });
    return (
      <div>
        <CohortCounter filteredStudents={filteredStudents} cohort={cohort} />
        <div>{gallery}</div>
      </div>
    );
  }
}

export default StudentGallery;
