import React from "react";
import Cohort from "./Cohort";
import "./CohortList.css";

class CohortList extends React.Component {
  getCohortArray = (data) => {
    let cohortObj = {};
    for (let i = 0; i < data.length; i++) {
      const cohortCode = data[i].cohort.cohortCode;
      if (!cohortObj.hasOwnProperty(cohortCode)) {
        cohortObj[cohortCode] = cohortCode;
      }
    }

    return Object.keys(cohortObj);
  };

  sortCohortArray = (cohortArray) => {
    const season = ["Spring", "Summer", "Fall", "Winter"];

    return cohortArray.sort((cohortA, cohortB) => {
      const yearOfCohortA = Number(cohortA.substring(cohortA.length - 4));
      const seasonOfCohortA = cohortA.substring(0, cohortA.length - 4);
      const yearOfCohortB = Number(cohortB.substring(cohortB.length - 4));
      const seasonOfCohortB = cohortB.substring(0, cohortB.length - 4);

      if (yearOfCohortA === yearOfCohortB) {
        return (
          season.indexOf(seasonOfCohortB) - season.indexOf(seasonOfCohortA)
        );
      } else {
        return yearOfCohortB - yearOfCohortA;
      }
    });
  };

  displayCohort = (data, selectCohortHandler) => {
    const cohortArray = this.getCohortArray(data);
    const sortedCohortArray = this.sortCohortArray(cohortArray);
    sortedCohortArray.unshift("AllStudents");

    return sortedCohortArray.map((cohort) => {
      return (
        <Cohort cohort={cohort} selectCohortHandler={selectCohortHandler} />
      );
    });
  };

  render() {
    const { data, selectCohortHandler } = this.props;

    return (
      <div className="cohortList">
        <h2>Choose a Class by Start Date</h2>
        {this.displayCohort(data, selectCohortHandler)}
      </div>
    );
  }
}

export default CohortList;
