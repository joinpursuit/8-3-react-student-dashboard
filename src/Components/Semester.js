import React from "react";

export default function Semester({ semester }) {
  const semesterDate = semester.cohort.cohortCode;
  // if (semesterDate === "Winter2025") {
  //   return <div>{semesterDate}</div>;
  // } else return null;

  return <div className="eachSemester">{semesterDate}</div>;
}
