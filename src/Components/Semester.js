import React from "react";

export default function Semester(eachSemester) {
  let uniqueSemester = eachSemester.semester;
  let formattedUniqueSemesterString = "";
  if (uniqueSemester) {
    let index = uniqueSemester.indexOf("2");
    formattedUniqueSemesterString =
      uniqueSemester.slice(0, index) +
      " ".repeat(1) +
      uniqueSemester.slice(index);
  }
  return <div className="eachSemester">{formattedUniqueSemesterString}</div>;
}
