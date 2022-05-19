import React from "react";
import "./Cohort.css";

class Cohort extends React.Component {
  parseCohort = (cohort) => {
    if (cohort === "AllStudents") return "All Students";
    return `${cohort.substring(0, cohort.length - 4)} ${cohort.substring(
      cohort.length - 4
    )}`;
  };

  render() {
    const { cohort, selectCohortHandler } = this.props;
    return (
      <div className="cohort" onClick={() => selectCohortHandler(cohort)}>
        {this.parseCohort(cohort)}
      </div>
    );
  }
}

export default Cohort;
