import React from "react";
import { studentData } from "../data/data";
import "./Nav.css"


const seasoning = (string) => {
  if (string === "AllStudents") {
    return "All Students";
  }
  const semesterStart = string.split("");
  const semesterEnd = semesterStart.splice(-4);
  return [...semesterStart, " ", ...semesterEnd].join("");
};

const startDate = () => {
  const startDates = studentData.map((student) =>
    seasoning(student.cohort.cohortCode)
  );
  const semesterStuff = [...new Set(startDates)];
  let seasons = { Winter: 1, Spring: 2, Summer: 3, Fall: 4 };
  semesterStuff.sort((a, b) => {
    let one = a.split(" "),
      two = b.split(" ");
    return one[1] - two[1] || seasons[one[0]] - seasons[two[0]];
  });
  const semesterEdit = semesterStuff.map((sem) =>
    sem.split(" ").join("")
  );
  return ["AllStudents", ...semesterEdit];
};

class Nav extends React.Component {
  render() {
    const { classFilter } = this.props;
    return (
      <article className="nav">
        <h3 className="title"> Choose a Class by Start Date </h3>
        <section className="dates">
          {startDate().map((date) => (
            <button
              className="semester"
              onClick={() => classFilter(date)}
              key={date}
            >
              {seasoning(date)}
            </button>
          ))}
        </section>
      </article>
    );
  }
}

export default Nav;