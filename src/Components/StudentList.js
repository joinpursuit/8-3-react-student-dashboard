import React from "react";
import Student from "./Student";

export default function StudentList({
  studentInformation,
  selectedCohortCode,
}) {
  const studentListItem = studentInformation.map((semester) => {
    return (
      <div className="oneStudent" key={semester.id}>
        <Student semester={semester} studentInformation={studentInformation} />
      </div>
    );
  });
  // console.log(studentInformation[0].notes[0].commenter);

  const formatCohortTitle = (string) => {
    if (string !== "All Students") {
      const newEndStr = string.substring(string.length - 4);
      const arr = string.split("2");
      return arr[0] + " " + newEndStr;
    }
    return "All Students";
  };

  return (
    <section>
      <h2 className="sutdentListTitle">
        {formatCohortTitle(selectedCohortCode)}
      </h2>
      <p className="classSizeTitle">
        Total Students: <span id="classSize">{studentInformation.length}</span>
      </p>
      <ul className="StudentList">{studentListItem}</ul>
    </section>
  );
}
