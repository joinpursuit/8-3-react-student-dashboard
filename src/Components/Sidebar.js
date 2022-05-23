import React from "react";
import { studentData } from "../data/data";
import "./sidebar.css";

function Sidebar(props) {
  const { filteredByClass, stringTransformer } = props;
  const startDateListSorted = () => {
    const startDates = studentData.map((student) =>
      stringTransformer(student.cohort.cohortCode)
    );
    const semesterNoDupes = [...new Set(startDates)];
    let seasons = { Winter: 1, Spring: 2, Summer: 3, Fall: 4 };
    semesterNoDupes.sort((a, b) => {
      let one = a.split(" "),
        two = b.split(" ");
      return one[1] - two[1] || seasons[one[0]] - seasons[two[0]];
    });
    return ["All Students", ...semesterNoDupes];
  };
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
            {stringTransformer(date)}
          </div>
        ))}
      </section>
    </article>
  );
}

export default Sidebar;
