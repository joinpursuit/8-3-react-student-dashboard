import React from "react";
import GalleryCounter from "./GalleryCounter";
import StudentCard from "./StudentCard";

function StudentGallery(props) {
  const { filteredStudents, cohort, showMore, showMoreHandler } = props;
  const gallery = filteredStudents.map((student, index) => {
    return (
      <StudentCard
        student={student}
        key={index}
        showMore={showMore}
        showMoreHandler={showMoreHandler}
      />
    );
  });
  return (
    <div>
      <GalleryCounter filteredStudents={filteredStudents} cohort={cohort} />
      <div>{gallery}</div>
    </div>
  );
}

export default StudentGallery;
