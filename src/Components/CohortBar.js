import React from 'react';
import './CohortBar.css';

function CohortBar(props) {
  const { data, handleClick } = props;
  // console.log(handleClick);

  const ListOfStartingDates = () => {
    const startDates = data.map((student) => student.cohort.cohortCode);
    return [...new Set(startDates)];
  };

  const filterByCohort = (cohortArr) => {
    // console.log(cohortArr)
    let obj = {};
    for (let i = 0; i < cohortArr.length; i++) {
      if (obj.hasOwnProperty !== cohortArr[i]) {
        obj[cohortArr[i]] = cohortArr[i];
      }
    }
    // console.log(obj);
    return Object.keys(obj);
  };

  const sortedCohortByQuarter = (filteredCohortArr) => {
    const season = ['Fall', 'Winter', 'Spring', 'Summer'];
    return filteredCohortArr.sort((cohort1, cohort2) => {
      const cohort1Year = Number(cohort1.substring(cohort1.length - 4));
      const cohort2Year = Number(cohort2.substring(cohort2.length - 4));
      const cohort1Season = cohort1.substring(0, cohort1.length - 4);
      const cohort2Season = cohort2.substring(0, cohort2.length - 4);
      if (cohort1Year === cohort2Year) {
        return season.indexOf(cohort2Season) - season.indexOf(cohort1Season);
      } else {
        return cohort2Year - cohort1Year;
      }
    });
  };
  const displayCohort = (data, handleClick) => {
    const cohortArr = data.map((student) => {
      return student.cohort.cohortCode;
    });

    const filteredCohortArr = filterByCohort(cohortArr);
    const sortedCohortArr = sortedCohortByQuarter(filteredCohortArr);
    sortedCohortArr.unshift('All Students');
    return sortedCohortArr.map((cohortCode, index) => {
      return (
        <li key={index} onClick={() => handleClick(cohortCode)}>
          {cohortCode === 'All Students' ? 'All Students' : `${cohortCode}`}
        </li>
      );
    });
  };
  return (
    <div className='cohortbar'>
      <h2>Choose a Class by Start Date</h2>

      <section>{displayCohort(data, handleClick)}</section>
    </div>
  );
}
export default CohortBar;
