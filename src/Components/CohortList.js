import React from "react";
import Semester from "./Semester";

export default function CohortList({ studentInformation }) {
  const semesterArray = [];
  for (let i = 0; i < studentInformation.length; i++) {
    const semesterDate = studentInformation[i].cohort.cohortCode;
    if (!semesterArray.includes(semesterDate)) {
      semesterArray.push(semesterDate);
    }
  }
  semesterArray.splice(0, 1, "Winter2026");
  semesterArray.splice(1, 1, "Fall2026");
  semesterArray.splice(2, 1, "Summer2026");
  semesterArray.splice(3, 1, "Spring2026");
  semesterArray.splice(4, 1, "Winter2025");
  semesterArray.splice(5, 1, "Fall2025");
  semesterArray.splice(6, 1, "Summer2025");
  semesterArray.splice(7, 1, "Spring2025");

  const semesterListItem = semesterArray.map((eachSemester) => {
    return (
      <div key={eachSemester}>
        <Semester semester={eachSemester} />
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
