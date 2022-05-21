import React from 'react';
import Cohort from './Cohort';
import './CohortList.css';

class CohortList extends React.Component {
  //get the unique cohortCodes(ex. winter2025)

  // const cohorts = new Set(data.map((element) => element.cohort.cohortCode));
  // console.log(cohorts)
  // return cohorts
  // ugh why wont this work? returns an array 

  pullCohorts = (data) => {
    const semesterArr = [];
    for (let i = 0; i < data.length; i++) {
      const semester = data[i].cohort.cohortCode;
      if (!semesterArr.includes(semester)) {
        semesterArr.push(semester);
      }
    }
    return semesterArr;
  };

//   sortCohortArray = (semesterArr) => {
//     const season = ['Spring', 'Summer', 'Fall', 'Winter'];

//     return semesterArr.sort((cohortA, cohortB) => {
//       const yearOfCohortA = Number(cohortA.substring(cohortA.length - 4));
//       const seasonOfCohortA = cohortA.substring(0, cohortA.length - 4);
//       const yearOfCohortB = Number(cohortB.substring(cohortB.length - 4));
//       const seasonOfCohortB = cohortB.substring(0, cohortB.length - 4);

//       if (yearOfCohortA === yearOfCohortB) {
//         return (
//           season.indexOf(seasonOfCohortB) - season.indexOf(seasonOfCohortA)
//         );
//       } else {
//         return yearOfCohortB - yearOfCohortA;
//       }
//     });
//   };

  showSemester = (data, updateCohort) => {
    const semesterArr = this.pullCohorts(data);
    // const sortedArr = this.sortCohortArray(semesterArr);// 
    semesterArr.unshift('All Students');

    return semesterArr.map((semester, idx) => {
      return (
        <Cohort key={idx} semester={semester} updateCohort={updateCohort} />
      );
    });
  };

  render() {
    const { data, updateCohort } = this.props;
    return (
      <div className="CohortList">
        <h2>Choose a Class by start Date</h2>
        {this.showSemester(data, updateCohort)}
      </div>
    );
  }
}

export default CohortList;
