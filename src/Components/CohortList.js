import React from "react";
import Semester from "./Semester";

export default function CohortList({ studentInformation }) {
  const semesterListItem = studentInformation.map((semester) => {
    return (
      <div key={semester.id}>
        <Semester semester={semester} />
      </div>
    );
  });
  return (
    <aside id="cohortList">
      <h1 id="cohortListTitle">Choose A Class by Start Date</h1>
      <ul>
        <div className="cohortListHeading">
          <div className="allStudents">All Students</div>
          <div>{semesterListItem}</div>
        </div>
      </ul>
    </aside>
  );
}
