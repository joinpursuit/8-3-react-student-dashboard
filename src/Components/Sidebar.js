import React from "react";
import { studentData } from "../data/data";

class Sidebar extends React.Component {
  startDateList() {
    const startDates = studentData.map((student) => student.cohort.cohortCode);
    return [...new Set(startDates)];
  }
  render() {
    const { filteredByClass } = this.props;
    return (
      <article>
        <h4> Choose a Class by Start Date </h4>
        <section className="sidebar">
          <div onClick={() => filteredByClass(null)}>All Students</div>
          {this.startDateList().map((date) => (
            <div onClick={() => filteredByClass(date)} key={date}>
              {date}
            </div>
          ))}
        </section>
      </article>
    );
  }
}

export default Sidebar;
