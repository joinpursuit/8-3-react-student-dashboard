import Data from "../../../data/data.json";
import StudentList from "../../StudentList/StudentList";
import CohortList from "../../CohortList/CohortList";

import { Component } from "react";
import "./StudentDashboard.scss";

class StudentDashboard extends Component {
  constructor() {
    super();
    this.state = {
      studentCount: Data.length,
    };
  }

  render() {
    const { studentCount } = this.state;

    return (
      <section className="StudentDashboardSection">
        <header className="dashboardHeader">Student Dashboard</header>
        <section className="main">
          <StudentList studentData={Data} studentCount={studentCount} />
          <CohortList studentData={Data} />
        </section>
      </section>
    );
  }
}

export default StudentDashboard;
