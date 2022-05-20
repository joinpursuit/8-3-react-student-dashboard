import Data from "../../../data/data.json";
import StudentList from "../../StudentList/StudentList";
import CohortList from "../../CohortList/CohortList";

import { Component } from "react";
import "./StudentDashboard.scss";

class StudentDashboard extends Component {
  constructor() {
    super();
    this.state = {
      cohortCode: "All Students",
    };
  }

  changeCohortCode = (cohort) => {
    this.setState({
      cohortCode: cohort,
    });
  };

  render() {
    return (
      <section className="StudentDashboardSection">
        <header className="dashboardHeader">Student Dashboard</header>
        <section className="main">
          <StudentList studentData={Data} cohortCode={this.state.cohortCode} />
          <CohortList
            studentData={Data}
            changeCohortCode={this.changeCohortCode}
          />
        </section>
      </section>
    );
  }
}

export default StudentDashboard;
