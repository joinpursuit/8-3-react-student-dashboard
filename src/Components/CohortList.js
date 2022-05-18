import React from "react";
import Cohort from "./Cohort";
import "./CohortList.css";

class CohortList extends React.Component {
  render() {
    return (
      <div className="cohortList">
        <h2>Choose a Class by Start Date</h2>
        <Cohort />
      </div>
    );
  }
}

export default CohortList;
