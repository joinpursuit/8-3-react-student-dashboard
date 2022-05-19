import React from "react";
import Student from "./Student";

export default function StudentList({ studentInformation }) {
  const studentListItem = studentInformation.map((semester) => {
    return (
      <div className="oneStudent" key={semester.id}>
        <Student semester={semester} />
      </div>
    );
  });
  return (
    <section>
      <h2 className="sutdentListTitle">All Students</h2>
      <p className="classSizeTitle">
        Total Students: <span id="classSize">{studentInformation.length}</span>
      </p>
      <ul className="StudentList">{studentListItem}</ul>
    </section>
  );
}
