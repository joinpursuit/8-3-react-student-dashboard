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

  parseCohortArray = (cohortArray) => {
    return cohortArray.map((cohort) => {
      return `${cohort.substring(0, cohort.length - 4)} ${cohort.substring(
        cohort.length - 4
      )}`;
    });
  };

  displayCohort = (data) => {
    const cohortArray = this.getCohortArray(data);
    const sortedCohortArray = this.sortCohortArray(cohortArray);
    const parsedCohortArray = this.parseCohortArray(sortedCohortArray);
    parsedCohortArray.unshift("All Students");

    return parsedCohortArray.map((cohort) => {
      return <Cohort cohort={cohort} />;
    });
  };

  render() {
    const { data } = this.props;

    return (
      <div className="cohortList">
        <h2>Choose a Class by Start Date</h2>
        {this.displayCohort(data)}
      </div>
    );
  }
}

export default CohortList;
