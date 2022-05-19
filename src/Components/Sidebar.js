import React from "react";
import { studentData } from "../data/data";
import "./sidebar.css";

class Sidebar extends React.Component {
  startDateList() {
    const startDates = studentData.map((student) => student.cohort.cohortCode);
    return [...new Set(startDates)];
  }
  render() {
    const { filteredByClass } = this.props;
    return (
      <div className="wrapper">
        <article className="sidebar">
          <h4 className="title"> Choose a Class by Start Date </h4>
          <section className="dates">
            <div onClick={() => filteredByClass(null)}>All Students</div>
            {this.startDateList().map((date) => (
              <div onClick={() => filteredByClass(date)} key={date}>
                {date}
              </div>
            ))}
          </section>
        </article>
      </div>
    );
  }
}

export default Sidebar;
