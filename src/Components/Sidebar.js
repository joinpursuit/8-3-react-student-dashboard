import React from "react";
import { studentData } from "../data/data";


const seasonMix = (string) => {
  if (string === "AllStudents") {
    return "All Students";
  }
  const semesterBeg = string.split("");
  const semesterEnd = semesterBeg.splice(-4);
  return [...semesterBeg, " ", ...semesterEnd].join("");
};

const startDateListSorted = () => {
  const startDates = studentData.map((student) =>
    seasonMix(student.cohort.cohortCode)
  );
  const semesterHope = [...new Set(startDates)];
  let seasons = { Winter: 1, Spring: 2, Summer: 3, Fall: 4 };
  semesterHope.sort((a, b) => {
    let one = a.split(" "),
      two = b.split(" ");
    return one[1] - two[1] || seasons[one[0]] - seasons[two[0]];
  });
  const semesterNoSpaces = semesterHope.map((sem) =>
    sem.split(" ").join("")
  );
  return ["AllStudents", ...semesterNoSpaces];
};

class Sidebar extends React.Component {
  render() {
    const { filteredByClass } = this.props;
    return (
      <article className="sidebar">
        <h3 className="title"> Choose a Class by Start Date </h3>
        <section className="dates">
          {startDateListSorted().map((date) => (
            <div
              className="semester"
              onClick={() => filteredByClass(date)}
              key={date}
            >
              {seasonMix(date)}
            </div>
          ))}
        </section>
      </article>
    );
  }
}

export default Sidebar;
