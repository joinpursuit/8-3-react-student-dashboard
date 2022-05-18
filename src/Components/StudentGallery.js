import React from "react";
import GalleryCounter from "./GalleryCounter";
import StudentCard from "./StudentCard";

class StudentGallery extends React.Component {
  render() {
    const { filteredStudents } = this.props;
    const gallery = filteredStudents.map((student, index) => {
      return <StudentCard student={student} key={index} />;
    });
    return (
      <div>
        <GalleryCounter filteredStudents={filteredStudents} />
        <div>{gallery}</div>
      </div>
    );
  }
}

export default StudentGallery;
